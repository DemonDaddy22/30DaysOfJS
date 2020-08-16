const sliderImages = document.querySelectorAll('.slide-in');

window.addEventListener('scroll', debounce(checkSlide));

// used to limit the excessive function calls by allowing them to trigger only after wait time (in ms)
function debounce(func, wait = 30, immediate = true) {
    let timeout;
    return function () {
        let context = this, args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide() {
    sliderImages.forEach(image => {
        // slide in the image when half the height of image is reached on scrolling
        const imageInAt = (window.scrollY + window.innerHeight) - image.height / 2;

        const imageBottom = image.offsetTop + image.height;

        const imageHalfShown = imageInAt > image.offsetTop;

        const imageNotScrolledPast = window.scrollY < imageBottom;

        if (imageHalfShown && imageNotScrolledPast) image.classList.add('active');
        else image.classList.remove('active');
    });
}