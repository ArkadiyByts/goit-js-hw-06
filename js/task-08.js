const logForm = document.querySelector('.login-form');

logForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" && password.value === "") {
        alert('You dont provide any data');
    }
    if (email.value === "" && password.value !== "" || email.value !== "" && password.value === "") {
        alert('"Email" or "Password" field is empty');
    }
    if (email.value !== "" && password.value !== "") { 
        console.log( `Email: ${email.value}`);
        console.log( `Password: ${password.value} `);
    }
    event.currentTarget.reset();
});

