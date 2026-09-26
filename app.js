let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; 

    voices.forEach((voice, i) => {
    let option = new Option(voice.name, i);
    voiceSelect.options[i] = option;
});

    if (voices.length > 0) {
        speech.voice = voices[0];
    }
}

populateVoices();


if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = populateVoices;
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {

    window.speechSynthesis.cancel();

    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
