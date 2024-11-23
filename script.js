$(document).ready(function(){
    $(".container").mouseenter(function(){
        $(".card").stop().animate({
            top:"-90px"
        },"slow");
    }).mouseleave(function(){
        $(".card").stop().animate({
            top: 0
            }, "slow");
    });
});

function increaseSize() {
    var btn = document.getElementById("yes-btn");
    var size = window.getComputedStyle(btn).getPropertyValue('font-size');
    var newSize = parseInt(size) + 5;
    btn.style.fontSize = newSize + 'px';
}

// Set the date when you and your boyfriend met (June 6, 2018)
var startDate = new Date("June 6, 2018").getTime();

// Update the countup every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
  
  // Calculate the time difference in milliseconds
  var timeDifference = now - startDate;
  
  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
  // Calculate months and years
  var months = Math.floor(days / 30); // Assuming each month has 30 days
  var years = Math.floor(days / 365); // Assuming each year has 365 days
  
  // Update days to remain within 0-30 range
  days = days % 30;
  
  // Display the result in the element with id="countup"
  document.getElementById("years").innerHTML = formatTime(years);
  document.getElementById("months").innerHTML = formatTime(months);
  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);
  
}, 1000);

// Function to add leading zeros to single-digit numbers
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

document.addEventListener('DOMContentLoaded', function() {
    const musicButton = document.getElementById('musicButton');
    const audio = document.querySelector('.audio');

    // Add click event listener to the music button
    musicButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play(); // Start playing the audio
            musicButton.classList.add('music-playing'); // Add class for styling
        } else {
            audio.pause(); // Pause the audio
            musicButton.classList.remove('music-playing'); // Remove class for styling
        }
    });
});


      

      






