import User from "../classes/User";
const UserFactory = {
    /***
     * Creates user from raw data
     */
    createFromRawData(rawData) {
        return new User(
            rawData.name,
            null,
            rawData.petName,
            rawData.petDate,
            rawData.petDescription,
            rawData.userUID,
            rawData.userImage,
            rawData.petImages
        );
    }
};

export {UserFactory};