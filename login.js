//Khai bao cac bien
let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("Login");

// Khai báo các hàm sử dụng
function checkLogin(user, pass) {
    if ((user == "admin") && (pass == "123"))
    {
        // code điều hướng sang trang index
        alert("Login success");
        window.location.href="index.html";

    }
    else
    {
        // code báo lỗi
        alert("Wrong login credentials")
        username.value = "";
        password.value = "";
    }
}
// Gán sự kiện vào button

    window.onload = (event) => {
loginBtn.addEventListener("click", function(){
    let user = username.value;
    let pass = password.value;
    checkLogin(user,pass);
});
}
const registerButton = document.getElementById('Register');

registerButton.addEventListener('click', () => {
  window.location.href = 'register.html';
});