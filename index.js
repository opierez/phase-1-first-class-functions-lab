// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
    return arr.slice(0, 2);
}

const returnLastTwoDrivers = function (arr) {
    return arr.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
];

const createFareMultiplier = function (int) {
    return function (fare) {
        return fare * int;
    }
}

const fareDoubler = function (fare) {
    return fare * 2;
}

const fareTripler = function (fare) {
    return fare * 3;
}

const selectDifferentDrivers = (driverNamesArr, cb) => {
    return cb(driverNamesArr);
}