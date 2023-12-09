const confirmPassword = document.getElementById('confirmPassword');
const registerButton = document.getElementById('Register');

registerButton.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPasswordValue = confirmPassword.value;

  // Kiểm tra nếu không có username hoặc password
  if (username.trim() === '' || password.trim() === '') {
    alert('Please enter both username and password.');
    return;
  }

  // Kiểm tra mật khẩu và xác nhận mật khẩu
  if (password !== confirmPasswordValue) {
    alert('Password incorrect. Please re-enter.');
    return;
  }
  const usernameRegex = /^[a-zA-Z]+$/;
  if (!usernameRegex.test(username)) {
    alert('Username should only contain letters.');
    return;
  }

  // Chuyển hướng đến trang index.html khi đăng ký thành công
  window.location.href = 'index.html';

  // Thực hiện các tác vụ đăng ký khác nếu cần
});
