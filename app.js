const inputPassword = document.querySelector('#password');
const inputPasswordConfirm = document.querySelector('#passwordConfirm');
const span = document.querySelector('span');
const form = document.querySelector('form');



form.addEventListener('submit', (e) => {
    if(inputPassword.value !== inputPasswordConfirm.value) {
        inputPasswordConfirm.value = '';
        span.textContent = '*Passwords do not match'
        inputPassword.style.border = '1.5px solid red'
        inputPasswordConfirm.style.border = '1.5px solid red'
        e.preventDefault()
    } 
})