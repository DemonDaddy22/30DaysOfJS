const slider = document.querySelector('.items');
let isClicked = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isClicked = true;
    slider.classList.add('active');
    // pageX gives the exact x coordinate of the page where the click took place, so we need to subtract slider's offsetLeft to get the correct position of x
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
    isClicked = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
    isClicked = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isClicked) return;
    e.preventDefault();
    // console.log(startX, scrollLeft, e);
    const x = e.pageX - slider.offsetLeft;
    const displacement = (x - startX) * 2;
    console.log(x, displacement);
    slider.scrollLeft = scrollLeft - displacement;
});