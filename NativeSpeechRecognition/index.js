const words = document.querySelector('.words');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true; // to output the intermediate results too
recognition.lang = 'en-US';

let p = document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result', e => {
    console.log(e);
})

recognition.addEventListener('end', recognition.start);

recognition.start();