import UserRepository from "../repositories/user.repository";
import ImageService from "./image.service";
import User from "../classes/User";
import userRepository from "../repositories/user.repository";
import {UserFactory} from "../factories/user.factory";

const UserService = {
    async registerUserFromSignup({name, email, password, petName, petDate, petDescription, userImage, petImages}) {
        /***
         * Registers user from signup form
         */
        const signUpData = await UserRepository.signUpUser({
            email, password
        });

        /***
         * Returns false if there is not signUpData
         */
        if (!signUpData) return false;

        const userUID = (signUpData.session.user.id);

        const userImageUploaded = await ImageService.uploadImage(userImage, `users/${userUID}/profile/`) ?? null;

        const petImagesUploaded = await Promise.all(petImages.map(async (image) => {
            return await ImageService.uploadImage(image, `users/${userUID}/pet/`);
        }));

        const registerError = {error} = await UserRepository.registerUser({
            userUID,
            name,
            petName,
            petDate,
            petDescription,
            userImage: userImageUploaded,
            petImages: petImagesUploaded
        })

        /***
         * Returns boolean if there is an error while registering user
         */
        return !registerError;
    },

    async getSession() {
        /***
         * Returns session data
         */
        return await UserRepository.getSession();
    },

    async logout() {
        /***
         * Returns logout data
         */
        return await UserRepository.logout();
    },

    async signIn(email, password) {
        /***
         * Returns signIn data
         */
        return await UserRepository.signIn({email, password});
    },

    async getCurrentUserData() {
        /***
         * Returns current user data
         */
        const session = await this.getSession();
        if (!session) return false;
        const user = session.user;
        return this.getUserData(user.id);
    },

    async getUserData(userUID) {
        /***
         * Returns user data
         */
        const data = await UserRepository.get(userUID);
        return UserFactory.createFromRawData(data);
    },

    async getSwiperUsers(user) {
        /***
         * Returns swiper users depending on current user
         */
        const data = await userRepository.getSwiperUsers(user.userUID);
        const users =  data.map((user) => UserFactory.createFromRawData(user));
        return users.sort((a, b) => 0.5 - Math.random());
    },

    async likeUser(userUID) {
        /***
         * Processes like user
         */
        const currentUser = await this.getSession();
        if (!currentUser) return {error: "Not Logged In"};
        const currentUserUID = currentUser.user.id;
        return await userRepository.likeUser(currentUserUID, userUID);
    },

    async getMatchesUsers(user) {
        /***
         * Returns matches users depending on current user
         */
        const userUID = user.userUID;
        const matchesUIDs = await userRepository.getMatchesUID(userUID);
        const matchesData = await Promise.all(matchesUIDs.map(async (matchUID) => {
            return await this.getUserData(matchUID);
        }));
        return matchesData.map((match) => UserFactory.createFromRawData(match));
    },

    async sendMessage(receiverUID, content) {
        /***
         * Sends message
         */
        const currentUser = await this.getSession();
        if (!currentUser) return {error: "Not Logged In"};
        const senderUID = currentUser.user.id;
        return await userRepository.sendMessage(senderUID, receiverUID, content);
    },

    async getMessages(receiverUID) {
        /***
         * Returns messages
         */
        const currentUser = await this.getSession();
        if (!currentUser) return {error: "Not Logged In"};
        const senderUID = currentUser.user.id;
        const {data, error} = await userRepository.getMessages(senderUID, receiverUID);
        return {data, error};
    }
}

export default UserService