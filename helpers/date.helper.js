const dateHelper = {
    getDBFormattedDate: (date) => {
        const dateParts = date.split('/');
        return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    }
}

export {dateHelper}