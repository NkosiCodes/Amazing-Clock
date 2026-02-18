function updateClock() {
    // get time
    const time_hours = new Date().getHours();
    const time_minutes = new Date().getMinutes();

    // split numbers
    const hourNumber_1 = time_hours.toString()[0];
    const hourNumber_2 = time_hours.toString()[1];
    const minsNumber_1 = time_minutes.toString()[0];
    const minsNumber_2 = time_minutes.toString()[1];

    document.querySelector(".clock-1").innerHTML = hourNumber_1;
    document.querySelector(".clock-2").innerHTML = hourNumber_2;
    document.querySelector(".clock-4").innerHTML = minsNumber_1;
    document.querySelector(".clock-5").innerHTML = minsNumber_2;
}

setInterval(updateClock, 1000);