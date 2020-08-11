const greenPara = document.getElementById('green');
let toggle = false;

function makeGreen() {
    greenPara.style.color = toggle ? '#BADA55' : '#000000';
    greenPara.style.fontSize = toggle ? '50px' : '16px';
}

greenPara.addEventListener('click', makeGreen);

