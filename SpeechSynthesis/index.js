const speech = new SpeechSynthesisUtterance();

const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

let voices = [];

speech.text = document.querySelector('[name="text"]').value;
// console.log(speech);

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', handleChangeOption));
speakButton.addEventListener('click', toggleVoice);
stopButton.addEventListener('click', () => toggleVoice(false));

function populateVoices() {
    voices = this.getVoices();
    // console.table(voices);

    const voiceOptions = voices.map(voice => `<option value=${voice.name}>${voice.name} (${voice.lang})</option>`).join('');
    voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {
    speech.voice = voices.find(voice => voice.name === this.value);
    // console.log(speech);
    toggleVoice();
}

function toggleVoice(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) speechSynthesis.speak(speech);
}

function handleChangeOption() {
    speech[this.name] = this.value;
    toggleVoice();
}