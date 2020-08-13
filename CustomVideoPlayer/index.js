const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress-filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');

// event listeners for toggling video
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

// event listeners for toggling play button
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);

// skip video
skipButtons.forEach(button => button.addEventListener('click', skip));

// range update
ranges.forEach(range => range.addEventListener('input', handleRangeUpdate));

// update video progress bar
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);

// key press events
// arrow keys do not get detected on event type keypress for all the browsers, buy keydown works for every browser
window.addEventListener('keydown', handleKeyPress);

function togglePlay() {
    const mode = video.paused ? 'play' : 'pause';
    video[mode]();
}

function toggleButton() {
    const button = this.paused ? '►' : '▌▌';
    toggle.innerHTML = button;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percentWatched = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentWatched}%`;
}

function scrub(e) {
    const duration = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = duration;
}

function handleKeyPress(e) {
    if (e.code === 'Space') togglePlay();
    else if (e.code === 'ArrowRight') video.currentTime += parseFloat(skipButtons[1].dataset.skip);
    else if (e.code === 'ArrowLeft') video.currentTime += parseFloat(skipButtons[0].dataset.skip);
    else if (e.code === 'ArrowUp') {
        video.volume = ranges[0].value + 0.05;
        ranges[0].value = video.volume;
    }
    else if (e.code === 'ArrowDown') {
        video.volume = ranges[0].value - 0.05;
        ranges[0].value = video.volume;
    };
}