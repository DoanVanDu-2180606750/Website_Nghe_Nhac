function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('forget-password-form').style.display = 'none';
}

function showLoginForm() {
    window.location="http://127.0.0.1:5500/Client/Main/main.html";
    // document.getElementById('login-form').style.display = 'block';
    // document.getElementById('register-form').style.display = 'none';
    // document.getElementById('forget-password-form').style.display = 'none';
}

function showForgetPasswordForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('forget-password-form').style.display = 'block';
}

function register() {
    // Placeholder for registration functionality
    alert("Đã gửi thông tin đến email của bạn.");
}

function forgetPassword() {
    // Placeholder for forget password functionality
    alert("Đã khôi phục mật khẩu.");
}

