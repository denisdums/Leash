export default class User {
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
        this.userUID = userUID;
    }

    getPetAge() {
        const petDate = new Date(this.petDate);
        const today = new Date();
        const diff = today.getTime() - petDate.getTime();
        const age = Math.floor(diff / (1000 * 3600 * 24 * 365))
        return `${age} ${age === 1 ? 'an' : 'ans'}`;
    }
}