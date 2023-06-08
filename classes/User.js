export default class User {
    /***
     * User class
     * @param name
     * @param email
     * @param petName
     * @param petDate
     * @param petDescription
     * @param userUID
     * @param userImage
     * @param petImages
     * @returns {User}
     */
    constructor(name, email, petName, petDate, petDescription, userUID, userImage, petImages) {
        this.name = name;
        this.email = email;
        this.petName = petName;
        this.petDate = petDate;
        this.petDescription = petDescription;
        this.userUID = userUID;
        this.userImage = userImage;
        this.petImages = petImages;
        return this;
    }

    setUserUID(userUID) {
        /***
         * Sets userUID
         */
        this.userUID = userUID;
    }

    getPetAge() {
        /***
         * Returns pet age
         */
        const petDate = new Date(this.petDate);
        const today = new Date();
        const diff = today.getTime() - petDate.getTime();
        const age = Math.floor(diff / (1000 * 3600 * 24 * 365))
        return `${age} ${age === 1 ? 'an' : 'ans'}`;
    }
}