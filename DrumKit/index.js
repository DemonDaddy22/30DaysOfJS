function playSound(e) {
    const drum = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
    if (!drum) return;

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0; // helps rewinding the audio to start
    audio.play();

    drum.classList.add('playing');
}

function removeTransition(e) {
    // select the property taking longest time to transition, in this case all the properties end after 0.07s
    if (e.propertyName !== 'transform') return;

    // this refers to entry, i.e. the drum or key div which is pressed down
    this.classList.remove('playing');
}

const drums = document.querySelectorAll('.drum');
drums.forEach(entry => entry.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);