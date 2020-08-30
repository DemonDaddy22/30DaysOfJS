const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('video');

let isClicked = false;

speed.addEventListener('mousedown', () => {
    isClicked = true;
});

speed.addEventListener('mouseup', () => {
    isClicked = false;
});

speed.addEventListener('mouseleave', () => {
    isClicked = false;
});

speed.addEventListener('mousemove', (e) => {
    if (!isClicked) return;

    e.preventDefault();
    const y = e.pageY - speed.offsetTop;
    const percentY = y / speed.offsetHeight;
    // console.log(y, percentY);

    const min = 0.5, max = 2;
    const height = Math.round(percentY * 100) + '%';
    const playbackRate = percentY * (max - min) + min;
    // console.log(height, playbackRate);

    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(1) + '×';
    video.playbackRate = playbackRate;
});