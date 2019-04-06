var input = [45, 24, 35, 31, 40, 38, 11]

function calculateProfit(input) {
  //this step is to reverse the input array;
  input.reverse();


  // This step is to calculate all the possible profits/losses for the day;

  var profitArray = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = i+1; j < input.length; j++) {
      profitArray.push(input[i] - input[j]);
    }
  }

  var maxProfit = 0
  for (var i = 0; i < profitArray.length; i++) {
    if (maxProfit < profitArray[i]) {
      maxProfit = profitArray[i]
    }
  }
  // console.log(profitArray);
  // console.log(maxProfit)
  return maxProfit
}

var output = calculateProfit(input);

module.exports = output