const keycode = document.querySelector('#keycode');
const keyText = document.querySelector('#key');

window.addEventListener('keydown', getKey);

function getKey(e) {
    keycode.textContent = e.keyCode;
    keycode.classList.add('selectedKeycode');
    keyText.textContent = e.key;
    keyText.classList.add('selectedKey');
}