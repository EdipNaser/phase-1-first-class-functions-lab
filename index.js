// Code your solution in this file!
// Code your solution in this file!
const returnFirstTwoDrivers = function ( drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    let firstTowDrivers = drivers.slice(0,2);
    return firstTowDrivers
}

const returnLastTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    let lastTowDrivers = drivers.slice(-2)
    return lastTowDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (num) {
    return fare => num * fare
}

const fareDoubler = function (fare){
    return fare * 2
}


const fareTripler = function (fare){
    return fare * 3
}

const selectDifferentDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'],fun ) {
    if (fun === selectingDrivers[0]) {
        return selectingDrivers[0]()
    }
    else if (fun === selectingDrivers[1]){ 
        return selectingDrivers[1]()
    }
}