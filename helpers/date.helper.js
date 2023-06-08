const dateHelper = {
    getDBFormattedDate: (date) => {
        /***
         * Returns date formatted for DB
         */
        const dateParts = date.split('/');
        return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    }
}

export {dateHelper}