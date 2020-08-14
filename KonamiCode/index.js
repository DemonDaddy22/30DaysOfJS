let pressedKeys = [];
const secretCode = 'rohan';

window.addEventListener('keyup', (e) => {
    pressedKeys.push(e.key);
    pressedKeys.splice(-secretCode.length - 1, pressedKeys.length - secretCode.length);

    if (pressedKeys.join('') === secretCode) cornify_add();
})