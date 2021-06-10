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

const createTimeInEvent = (employee, dateTime) => {
// let's hope dateTime isn't a Forbidden Word
// dateTime format is YYYY-MM-DD HHMM for the sake of splitting along things
    let timeArray = dateTime.split(' ');
    // remember, the timeInEvents object value is an (empty, sometimes) array
    employee.timeInEvents.push(
        {
            // array of timestamp objects
            type: "TimeIn",
            // check the test for the format of these (hour is a number, the full HHMM, date is a string)
            hour: parseInt(timeArray[1], 10),
            date: timeArray[0]
        }
    )
    
    return employee
}

const createTimeOutEvent = (employee, dateTime) => {
// Once More But Cleaner
    let timeArray = dateTime.split(' ');
    employee.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(timeArray[1], 10),
            date: timeArray[0]
        })
    return employee
} 

const hoursWorkedOnDate = (employee, date) => {
    // console.log(`${employee} worked N hours on ${date}`)
    let timeIn = employee.timeInEvents.find( function(i) {
        return i.date === date;
    }) // returns the full timeIn object (remember timeIn is an array of objects) that contains the date searched for
    let timeOut = employee.timeOutEvents.find (function(i) {
        return i.date === date;
    })
    let hoursWorked = (timeOut.hour - timeIn.hour) / 100
    // remember timeIn and timeOut objects have an hour property that's an integer, yes?
    return hoursWorked 
    // return employee no
}

const wagesEarnedOnDate = (employee, date) => {
    // console.log(`${employee} earned N wages on ${date}`)
    let wage = employee.payPerHour
    // check this is an integer? what formats do we need?
    let wagesEarned = hoursWorkedOnDate(employee, date) * wage

    return wagesEarned
}

const allWagesFor = (employee) => {
    let datesWorked = employee.timeInEvents.map( function(event) {
        return event.date 
    })

    let totalWagesEarned = datesWorked.reduce( function(total, date) {
        return total + wagesEarnedOnDate(employee, date)
    }, 0)
    // REMEMBER THE ZERO AT THE END SO IT INCLUDES THE FIRST ENTRY IN THE ARRAY
    return totalWagesEarned 
}

const calculatePayroll = (employeeSuperArray) => {
    return employeeSuperArray.reduce( function(total, employee) {
        return total + allWagesFor(employee)
    }, 0)
}


const findEmployeeByFirstName = (employeeSuperArray, name) => {
    //console.log(name);
    let employee = employeeSuperArray.find( function(n) {
        return n.firstName === name;
    })
    return employee
}