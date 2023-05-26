import supabase from "../config/supabaseConfig";

const UserRepository = {
    async signUpUser({email, password}) {
        const {data, error} = await supabase.auth.signUp({email, password});
        if (error) {
            console.error(error);
            return false;
        } else {
            return data;
        }
    },

    async registerUser({userUID, name, petName, petDate, petDescription, userImage, petImages}) {
        const data = await supabase.from('userProfiles').insert({
            userUID,
            name,
            petName,
            petDate,
            petDescription,
            userImage,
            petImages
        });
    },


    async getSession() {
        const {data, error} = await supabase.auth.getSession();

        if (error) {
            console.error(error);
            return null;
        }

        return data.session;
    },

    async logout() {
        const {error} = await supabase.auth.signOut();
        return !error;
    },

    async signIn({email, password}) {
        const {error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) {
            return false;
        }

        return await this.getSession();
    },

    async get(userUID) {
        const {data, error} = await supabase.from('userProfiles').select('*').eq('userUID', userUID);
        if (error) {
            console.error(error);
            return false;
        }
        return data[0] ?? false;
    },

    async getSwiperUsers(userUID) {
        const matchesUID = await this.getMatchesUID(userUID);
        const notMatchesUID = [...matchesUID, userUID];
        const {data, error} = await supabase.from('userProfiles').select('*').not('userUID','in' ,`(${notMatchesUID.join(',')})`);

        if (error) {
            console.error(error);
            return false;
        }

        return data ?? false;
    },

    async likeUser(currentUserUID, userUID) {
        let {isAMatch} = await this.isAMatch(currentUserUID, userUID);

        if (isAMatch) {
            const {data, error} = await supabase.from('userRelations').update({
                match: true
            }).eq('user1', currentUserUID).eq('user2', userUID);
            return {data, error, isAMatch};
        }

        const {data, error} = await supabase.from('userRelations').insert({
            user1: userUID,
            user2: currentUserUID
        });
        return {data, error, isAMatch};

    },


    // Is a match
    async isAMatch(currentUserUID, userUID) {
        const {
            data,
            error
        } = await supabase.from('userRelations').select('*').eq('user1', currentUserUID).eq('user2', userUID);
        if (error) {
            console.error(error);
            return false;
        }

        const isAMatch = data.length > 0;
        return {data, error, isAMatch};
    },




    //Match
    async getMatchesUID(userUID) {
        const firstResponse = await supabase.from('userRelations').select('user2').eq('user1', userUID).eq('match', true);
        const secondResponse = await supabase.from('userRelations').select('user1').eq('user2', userUID).eq('match', true);
        return [...firstResponse.data, ...secondResponse.data].map((match) => match.user2 ?? match.user1);
    },
}

export default UserRepository