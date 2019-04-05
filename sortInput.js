
//This code sorts the input received from the user and displays the sorted array

var sortfunction = function(input) {

  input.sort(function(a, b){
    if (a < b) {
    return -1;
  }
  else {
    return 1;
  }

  })

}

module.exports = function (input) {
  sortfunction(input)

  var output = input[0]
  for (var i = 1; i < input.length; i++) {
    output = output + ' ' + input[i];
  }
  return output;
}