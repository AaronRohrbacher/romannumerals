// Business Logic
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

var result = "";
// Compares input number to index of numberArr
function romanNumerals(number) {
  for (var i = 0; i <= numerals.length; ++i) {
    if (number >= numbers[i]) {
    result += numerals[i];
    number -= numbers[i];
    return romanNumerals(number);
  } else if (number === 0) {
      return result;
    }
  }
}

// User Interface
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    result = "";
    var input = $("#input").val();
    $("#result").text(romanNumerals(parseInt(input)));
  });
});
