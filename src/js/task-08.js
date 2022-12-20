const logForm = document.querySelector('.login-form');
logForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert('"Email" or "Password" field is empty');
    }
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
});

