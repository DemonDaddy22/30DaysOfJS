const divs = document.querySelectorAll('div');

// capture is opposite of bubbling up, basically browser goes on capturing each element when an event is triggered until the last element
// default capture - false
divs.forEach(div => div.addEventListener('click', eventCapture, { capture: true }));

function eventCapture(e) {
    // console.log(this.classList.value);
    e.stopPropagation();
    console.log(this);
}