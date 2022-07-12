const keys = document.querySelectorAll(".key")

function playNote(event) {

    let audioKeyCode = getKeyCode(event);
    
    //typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    //if key exists
    const noFoundedKey = !key

    if(noFoundedKey) {
        return;
    }   

    keyPress(key);
    playAudio(audioKeyCode);
}

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown"
    if(isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode;
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removeKeyClass(event) {
    event.target.classList.remove("playing")
}

keys.forEach (function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removeKeyClass)
})

window.addEventListener("keydown", playNote)

function keyPress(key) {
    key.classList.add("playing");
}
