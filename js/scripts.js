// Business Logic
function numerals(number) {
  var numberArr = [1, 4, 5];
  var numeralArr = ["I", "IV", "V"];
  var index = 0;
  number = parseInt(number);

//Compares input number to index of numberArr
for (var i = 0; i < numberArr.length; ++i ) {
  if (number === (numberArr[i])) {
    index = i;
  }
}

//Compares found index of numberArr to numeralArr
  var romanNumeral = numeralArr[index];
  return romanNumeral;
};

// User Interface
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();
    $("#result").text(numerals(input));
    $("#result").show();
  });
});
