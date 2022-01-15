// Set the date we're counting down to
var countDownDate = new Date("Dec 21, 2022 06:00:00").getTime();
var width = 0;
var anim_done = false;

// return true if in range, otherwise false
function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    var today = new Date();
    var today_hours = today.getHours();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown_timer"
    document.getElementById("countdown_timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown_timer").innerHTML = "I'm home.";
    }


    var element = document.getElementById("myprogressBar");
    element.style.width = parseInt((365 - days) / 365 * 100) + '%';
    element.innerHTML = (52 - weeks) + ' weeks';
    console.log(weeks);
    anim_done = true;

    if (inRange(24 - today_hours, 1, 2) || inRange(24 - today_hours, 18, 24)) {
        var tosleep = document.getElementById("sleeping");
        tosleep.style.display = "initial";
    }
}, 1000);


