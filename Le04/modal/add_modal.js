import { modalInit } from './modal.js';

async function addModal(button) {
    let dialog = document.getElementById('modal')
    fetch('../modal/modal.html')
        .then(response => response.text())
        .then(data => dialog.innerHTML = data)
        .then(() => {
            button.addEventListener('click', function () {
                dialog.showModal();
            });
            let modalClose = document.getElementById('modal-close');
            modalClose.addEventListener('click', function () {
                dialog.close();
            });
            modalInit();
        })
}
export default addModal;