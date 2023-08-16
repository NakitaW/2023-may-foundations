$(document).ready(function() {
  $("#subscription-form").submit(function(e) {
    e.preventDefault();

    var email = $("#email").val();

    // Perform validation, subscription process, and display message
    if (email !== "") {
      $("#message").text("Subscribed successfully!");
    } else {
      $("#message").text("Please enter a valid email.");
    }
  });
});
