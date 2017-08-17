// Business Logic
var numberArr = [10, 9, 5, 4, 1];
var numeralArr = ["X", "IX", "V", "IV", "I"];

// Compares input number to index of numberArr
function matchNumberRoman(number) {
  var index = 0;
  number = parseInt(number);
  var remainder = 0;
  for (var i = 0; i < numberArr.length; ++i ) {
    if (number === (numberArr[i])) {
      index = i;
    }
  }
  var romanNumeral = numeralArr[index];
  return romanNumeral;
}

//Uses Math to create the number 3
function getUnderRoman(number) {
  var str="";
  var index = 0;
//Creates index for array comparison
  for(i = 0; i <= number; ++i) {
    if(number >= numberArr[i]) {
      index = i;
    }
  }

//Takes index Roman Numeral, adds to string "remainder" number of times.
var remainder = number % numberArr[index];
  for (i=1; i<=remainder; ++i) {
    str = str + numeralArr[index];
  }
  return str
}





//Compares found index of numberArr to numeralArr



// User Interface
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();
    $("#result").text(getUnderRoman(input));
    $("#result").show();
  });
});
