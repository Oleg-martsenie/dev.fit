const ModalButton = document.getElementById('modal-login');
const ModalLogin = document.querySelector('.login-form');

ModalButton.onclick = () => {
    ModalLogin.classList.toggle('active')
}