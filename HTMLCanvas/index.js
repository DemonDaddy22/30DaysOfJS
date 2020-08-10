const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let canDraw = false;

let endX = 0, endY = 0, hue = 0, width = 50, direction = true;

function drawing(e) {
    if (!canDraw) return;
    
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = width;

    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [endX, endY] = [e.offsetX, e.offsetY];

    hue = (hue + 1) % 360;
    width = direction ? width + 1 : width - 1;
    if (width > 100 || width < 50) direction = !direction;
}

canvas.addEventListener('mousedown', (e) => {
    canDraw = true;
    [endX, endY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', () => canDraw = false);
canvas.addEventListener('mouseout', () => canDraw = false);