// login-register-btn-top
const x = document.getElementById("login");
const y = document.getElementById("register");


function register(){
    x.style.left = "-470px";
    y.style.left= "0px";
}

function login(){
    x.style.left = "0px";
    y.style.left= "-470px";
}
// login-register-btn-top
const btnElList = document.querySelectorAll('.login-register-btn-top');

btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special');
        btnEl.classList.add('special');
    })
})
