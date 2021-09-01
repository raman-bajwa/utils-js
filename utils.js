 const Round2decimalPlaces = (value, decimals = 2) => {
    return Number(Math.round(parseFloat(value + 'e' + decimals)) + 'e-' + decimals);
}

const CleanObject = (obj) => {
    for (var propName in obj) {
        // deletes null and undefined from object
        if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "null" || obj[propName] === "undefined") {
            delete obj[propName];
        }
    }
    return obj
}

const isDate = (date) => {
    // check for null
    if (date === null || date === undefined) {
        return false;
    }

    // check if date is a valid date or not
    if (isNaN(date.getTime())) { // if it's invalid
        return false;
    }

    return true;
}

module.exports = {
    Round2decimalPlaces,
    CleanObject,
    isDate
}