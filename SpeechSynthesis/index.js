const speech = new SpeechSynthesisUtterance();

const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

let voices = [];

speech.text = document.querySelector('[name="text"]').value;
// console.log(speech);

speechSynthesis.addEventListener('voiceschanged', populateVoices);

function populateVoices() {
    voices = this.getVoices();
    // console.table(voices);

    const voiceOptions = voices.map(voice => `<option value=${voice.name}>${voice.name} (${voice.lang})</option>`).join('');
    voicesDropdown.innerHTML = voiceOptions;
}