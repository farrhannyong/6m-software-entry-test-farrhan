
/*
    Task 1:
    - Import the file `external.js`.
    - Destructure the imported function.
*/

// Task 1: Add code here
function printSomething(){
    console.log("I am printing something.");
}

module.exports.print = printSomething;
const { print } = require('./moduleName');

print();
