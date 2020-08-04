// select each hand
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

// counters will prevent each hand to rewind back after completion of a complete rotation
// rather than going back to 90 deg after every rotation, counters will enable to add 360 degrees after every rotation for continuous hand movement
let secondCounter = 0, minuteCounter = 0, hourCounter = 0;

function setDate() {
    const now = new Date();
    let startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    // this will reset the counters at the start of each day
    if (startOfDay.getTime() === now.getTime()) {
        secondCounter = 0;
        minuteCounter = 0;
        hourCounter = 0;
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
    hourCounter = hours === 0 ? hourCounter + 1 : hourCounter;
    const hoursToDegrees = (360 * hourCounter) + ((hours / 12) * 360) + 90;

    hourHand.style.transform = `translateX(-100%) rotate(${hoursToDegrees}deg)`;
}

setInterval(setDate, 1000);

