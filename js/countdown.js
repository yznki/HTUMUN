document.addEventListener("DOMContentLoaded", function() {
    // Set the date we're counting down to
    var year = new Date().getFullYear(); // Get the current year
    var countDownDate = new Date(year, 9, 19).getTime(); // Months are 0-indexed in JavaScript, so October is 9
  
    // Update the countdown every 1 second
    var x = setInterval(function() {
  
      // Get the current date and time
      var now = new Date().getTime();
  
      // Find the time difference between now and the countdown date
      var distance = countDownDate - now;
  
      // Time calculations for days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the results in the respective elements
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
  
      // If the countdown is over, clear the interval and display a message
      if (distance < 0) {
        clearInterval(x);
        document.querySelector(".counter-heading").innerText = "Event has started!";
      }
    }, 1000);
  });  