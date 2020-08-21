const words = document.querySelector('.words');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true; // to output the intermediate results too
recognition.lang = 'en-US';

let p = document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = [...e.results]
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    p.textContent = poopScript;

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
})

recognition.addEventListener('end', recognition.start);

recognition.start();