const btnLogin = document.querySelector('.btn-login');
const btnCreate = document.querySelector('.btn-create');
const loginPage = document.querySelector('.login-page');
const mainPage = document.querySelector('.main-page');

const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
}

btnLogin.addEventListener('click', (e) => {
    if(e.target.classList[1] === 'btn-login') {
        goToLoginPage();
    }
    console.log(btnLogin);
    
});

btnCreate.addEventListener('click', (e) => {
    console.log(btnCreate);

});