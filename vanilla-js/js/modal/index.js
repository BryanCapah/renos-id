const body = document.getElementsByTagName("BODY")[0];
const modal = document.getElementById('modal');
const btnModal = document.getElementById('btn-modal');
const btnClose = document.getElementsByClassName('btn-close')[0];

btnModal.addEventListener('click', openModal)
btnClose.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
window.addEventListener('keydown', onEscPressed);

function openModal() {
    modal.style.visibility = 'visible';
    modal.style.opacity = 1;
    body.style.overflow = 'unset';

    const inputHeader = document.getElementById('input-header')
    const inputBody = document.getElementById('input-body')
    const inputFooter = document.getElementById('input-footer')

    const headerText = document.getElementsByClassName('modal-header-text')[0]
    const bodyText = document.getElementsByClassName('modal-body')[0]
    const footerText = document.getElementsByClassName('modal-footer')[0]
    headerText.textContent = inputHeader.value
    bodyText.textContent = inputBody.value
    footerText.textContent = inputFooter.value
}

function closeModal() {
    modal.style.visibility = 'hidden';
    modal.style.opacity = 0;
    body.style.overflow = 'unset';

}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.visibility = 'hidden';
        modal.style.opacity = 0;
    }
}

function onEscPressed(event) {
    const escPressed = event.key === "Escape"
    escPressed && closeModal()
}