const btnLogin = document.querySelector(".btn-login");
const btnCreate = document.querySelector(".btn-create");
const loginPage = document.querySelector(".login-page");
const mainPage = document.querySelector(".main-page");
const right = document.querySelector(".right");
const loginModal = document.querySelector(".login-modal");
const loginWarning = document.querySelector(".login-warning");
const loginUserInfo = document.querySelector(".login-user-info");
const loginPassword = document.querySelector(".login-password");

const goToLoginPage = () => {
  mainPage.style.display = "none";
  loginPage.style.display = "grid";
  loginModal.style.display = "block";
};

const warningMessage = () => {
  loginWarning.style.display = "gird";
};

right.addEventListener("click", (e) => {
  if (e.target.classList[1] === "main-btn") {
    goToLoginPage();
  }
  console.log(e.target.classList[1]);
});

loginModal.addEventListener("click", (e) => {
  if (e.target.classList[1] === "sub-btn") {
    warningMessage();
  }
  console.log(e.target.classList[1]);
});
