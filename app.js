const ModalButton = document.getElementById('modal-login');
const ModalLogin = document.querySelector('.login-form');
const MenuArea = document.querySelector('.navbar');
const MobileMenu = document.getElementById('menu-mobile')

ModalButton.onclick = () => {
    ModalLogin.classList.toggle('active')
    MenuArea.classList.remove('active')
}

MobileMenu.onclick = () => {
    ModalLogin.classList.remove('active')
    MenuArea.classList.toggle('active')
}