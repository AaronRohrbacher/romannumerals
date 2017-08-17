// Business Logic



// User Interface
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();


    $("#result").text(result);
    $("#result").show();
  });
});
