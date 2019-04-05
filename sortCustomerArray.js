var inputReceived = process.argv.slice(2);

//var inputArray = require('./receiveInput.js')
var outputArray = require('./sortInput.js')

//console.log("Numbers provided by the user are: ", inputArray(inputReceived));
console.log("Sorted numbers are: ", outputArray(inputReceived))