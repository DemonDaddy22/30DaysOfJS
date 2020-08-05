// select each hand
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

// select digital-clock
const digitalClock = document.getElementById('digital-clock');

// counters will prevent each hand to rewind back after completion of a complete rotation
// rather than going back to 90 deg after every rotation, counters will enable to add 360 degrees after every rotation for continuous hand movement
let secondCounter = 0, minuteCounter = 0;

function setDate() {
    const now = new Date();
    let startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    // this will reset the counters at the start of each day
    if (startOfDay.getDay() === now.getDay() && startOfDay.getHours() === now.getHours() && startOfDay.getMinutes() === now.getMinutes()) {
        console.log(secondCounter);
        secondCounter = 0;
        minuteCounter = 0;
        console.log(secondCounter);
    }

    const seconds = now.getSeconds();
    secondCounter = seconds === 0 ? secondCounter + 1 : secondCounter;
    const secondsToDegrees = (360 * secondCounter) + ((seconds / 60) * 360) + 90;

    secondHand.style.transform = `translateX(-100%) rotate(${secondsToDegrees}deg)`;

    const minutes = now.getMinutes();
    minuteCounter = minutes === 0 ? minuteCounter + 1 : minuteCounter;
    const minutesToDegrees = (360 * minuteCounter) + ((minutes / 60) * 360) + 90;

    minuteHand.style.transform = `translateX(-100%) rotate(${minutesToDegrees}deg)`;

    const hours = now.getHours();
    const hoursToDegrees = ((hours / 12) * 360) + 90;

    hourHand.style.transform = `translateX(-100%) rotate(${hoursToDegrees}deg)`;

    // for digital clock
    const digitalHours = hours > 12 ? hours % 12 : hours;
    const timeFormat = hours < 12 ? 'AM' : 'PM';
    const time = `${digitalHours < 10 ? '0' + digitalHours : digitalHours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} ${timeFormat}`;

    digitalClock.innerHTML = time;
}

setInterval(setDate, 1000);

