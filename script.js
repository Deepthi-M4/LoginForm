const form = document.getElementById('loginForm');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let valid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === ""){
        emailError.textContent = "Email is required";
        valid = false;
    }
    else if(!emailPattern.test(email)){
        emailError.textContent = "Enter a valid email";
        valid = false;
    }
    if(password === ""){
        passwordError.textContent = "Password is required";
        valid = false;
    }
    else if(password.length < 6){
        passwordError.textContent = "Password must contain at least 6 characters";
        valid = false;
    }
    if(valid){
        successMessage.textContent = "Login Successful!";
    }
});