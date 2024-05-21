const textEL = document.getElementById('txtarea');
const speakEL = document.getElementById('speak');

speakEL.addEventListener('click', copy);
function speakText() {

    // stop any speaking in progress
    window.speechSynthesis.cancel();

    const text = textEL.value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

function copy(){
let copiedtext  = document.getElementById('txtarea');
copiedtext.select();
document.execCommand("copy");

}

