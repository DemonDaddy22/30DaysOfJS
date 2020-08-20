const videoTimes = [...document.querySelectorAll('[data-time]')];

const seconds = videoTimes
    .map(entry => entry.dataset.time)
    .map(time => {
        const [min, sec] = time.split(':').map(parseFloat);
        return min * 60 + sec;
    })
    .reduce((total, seconds) => total + seconds);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`${hours}:${mins}:${secondsLeft}`);