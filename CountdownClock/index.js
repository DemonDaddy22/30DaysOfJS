let countdown;
const timerDisplay = document.querySelector('.display-time-left');
const endTime = document.querySelector('.display-end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // clear previous timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + (seconds * 1000);
    // console.log(now, then);
    displayTime(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // console.log(secondsLeft);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTime(secondsLeft);
    }, 1000);
}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    // console.log({minutes, remainingSeconds});

    const timeString = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    document.title = `${timeString} Countdown Clock`;
    timerDisplay.textContent = timeString;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes} ${hour > 11 ? 'PM' : 'AM'}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    // console.log(mins);
    timer(mins * 60);
    this.reset();
});