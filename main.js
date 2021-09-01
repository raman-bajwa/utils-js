// import { CleanObject, isDate } from '../utils';

const { Round2decimalPlaces, CleanObject, isDate } = require('./utils');

// converts to 2 decimal places
console.log(Round2decimalPlaces(2.346));

// removes null or undefined from a object.
console.log(CleanObject({
    name: "John doe",
    age: "18",
    key1: null
}));

// check if passed argument is a date or not.
console.log(isDate(new Date()));