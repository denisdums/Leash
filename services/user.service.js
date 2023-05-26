import UserRepository from "../repositories/user.repository";
import ImageService from "./image.service";
import User from "../classes/User";
import userRepository from "../repositories/user.repository";
import {UserFactory} from "../factories/user.factory";

const UserService = {
    async registerUserFromSignup({name, email, password, petName, petDate, petDescription, userImage, petImages}) {
        const signUpData = await UserRepository.signUpUser({
            email, password
        });

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
        return !registerError;
    },

    async getSession() {
        return await UserRepository.getSession();
    },

    async logout() {
        return await UserRepository.logout();
    },

    async signIn(email, password) {
        return await UserRepository.signIn({email, password});
    },

    async getCurrentUserData() {
        const session = await this.getSession();
        if (!session) return false;
        const user = session.user;
        return this.getUserData(user.id);
    },

    async getUserData(userUID) {
        const data = await UserRepository.get(userUID);
        return UserFactory.createFromRawData(data);
    },

    async getSwiperUsers(user) {
        const data = await userRepository.getSwiperUsers(user.userUID);
        const users =  data.map((user) => UserFactory.createFromRawData(user));
        return users.sort((a, b) => 0.5 - Math.random());
    },

    async likeUser(userUID) {
        const currentUser = await this.getSession();
        if (!currentUser) return {error: "Not Logged In"};
        const currentUserUID = currentUser.user.id;
        return await userRepository.likeUser(currentUserUID, userUID);
    },



    // Match

    async getMatchesUsers(user) {
        const userUID = user.userUID;
        const matchesUIDs = await userRepository.getMatchesUID(userUID);
        const matchesData = await Promise.all(matchesUIDs.map(async (matchUID) => {
            return await this.getUserData(matchUID);
        }));
        return matchesData.map((match) => UserFactory.createFromRawData(match));
    }
}

export default UserService