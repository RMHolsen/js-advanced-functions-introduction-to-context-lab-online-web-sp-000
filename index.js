// Your code here
const createEmployeeRecord = (array) => {
    // populates a record means you're creating an object
    /* let firstName = array[0];
    let familyName = array[1];
    let title = array[2];
    let payPerHour = array[3]; */
        return {
        // yes the return needs to be explicit. I think at this point we just assume returns need to be explicit
            //OBJECTS DO NOT USE = OR ;, they use : and ,
            firstName: array[0],
            familyName: array[1],
            title: array[2],
            payPerHour: array[3],
            timeInEvents: [],
            timeOutEvents: []
        }
}

const createEmployeeRecords = (employeeSuperArray) => {
// okay but maybe don't call the arg just 'array', for clarity's sake
    return employeeSuperArray.map( function(employee) {
    // remember, just call it 'function', getting funky and calling it callbackFunc or whatever rarely works
        return createEmployeeRecord(employee)
        // and as in Ruby, we can just use the method on each entry
    })
}

// Okay actually for clarity's sake we're calling the array of arrays SuperArray and the array of each employee just Array

const createTimeInEvent = (employeeArray, dateTime) => {
// let's hope dateTime isn't a Forbidden Word
    let 
    let timeIn = {

    }
}

const createTimeOutEvent = () => {
    
}