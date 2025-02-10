import addModal from '../modal/add_modal.js';

let textarea = document.getElementById('tzeet-text');
let chars = document.getElementById('chars');

const maxChars = 140;

function countInput(textarea, chars) {
    let length = maxChars - textarea.value.length;
    let textareaLength = textarea.value.length;

    if (textareaLength < 1) {
        chars.style.display = 'none';
        return;
    }
    
    if (length <= 0) {
        chars.style.color ='rgb(255, 0, 0)';
    } else if (length <= 40) {
        chars.style.color ='rgb(255, 200, 0)';
    }  else {
        chars.style.color ='var(--font-color)';
    }
    
    chars.style.display = 'inline';
    chars.textContent = length;
}


if(textarea.value.length > 0) {
    countInput(textarea, chars);    
}

textarea.addEventListener('input', function() {
    countInput(textarea, chars);
});


addModal(document.getElementById('tzeet-modal'));