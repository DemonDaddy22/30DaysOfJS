const hero = document.querySelector('.hero');
const h1 = hero.querySelector('h1');

hero.addEventListener('mousemove', moveShadow);

function moveShadow(e) {
    const width = this.offsetWidth, height = this.offsetHeight;
    let x = e.offsetX, y = e.offsetY;

    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const range = 80;
    const rangeX = Math.round((x / width * range) - range / 2), rangeY = Math.round((y / height * range) - range / 2);

    h1.style.textShadow = `${rangeX}px ${rangeY}px 5px rgba(0, 0, 0, 0.2)`;
}