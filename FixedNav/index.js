const nav = document.querySelector('#main');

const offsetTop = nav.offsetTop;

window.addEventListener('scroll', stickNavToTop);

function stickNavToTop() {
    // console.log(offsetTop, window.scrollY);
    // when window is scrolled past offsetY of nav, stick the navbar to top
    if (window.scrollY >= offsetTop) {
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}