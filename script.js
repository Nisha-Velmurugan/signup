document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    const regNo = document.getElementById('regNo').value;
    const regNoPattern = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
    if (!regNoPattern.test(regNo)) {
        document.getElementById('regNoError').textContent = 'Invalid Registration Number.';
        document.getElementById('regNoError').style.display = 'block';
        isValid = false;
    }

    const username = document.getElementById('username').value;
    if (/\d/.test(username)) {
        document.getElementById('usernameError').textContent = 'Username should not contain digits.';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must include uppercase, lowercase, digit, special character, and must be at least 8 characters long.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    const mobile = document.getElementById('mobile').value;
    const mobilePattern = /^[1-9]\d{9}$/;
    if (!mobilePattern.test(mobile)) {
        document.getElementById('mobileError').textContent = 'Invalid Mobile Number.';
        document.getElementById('mobileError').style.display = 'block';
        isValid = false;
    }

    const dob = document.getElementById('dob').value;
    const dobPattern = /^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])\d{4}$/;
    if (!dobPattern.test(dob)) {
        document.getElementById('dobError').textContent = 'Invalid Date of Birth. Format: DDMMYYYY.';
        document.getElementById('dobError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Signup successful!');
    }
});

