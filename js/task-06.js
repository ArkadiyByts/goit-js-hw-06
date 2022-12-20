let input = document.querySelector('input');
console.log(input);
let inputLength = input.getAttribute('data-length');
console.log(inputLength);

input.addEventListener("blur", () => {
    input.classList.remove('valid');
    input.classList.remove('invalid');
    if (parseInt(inputLength) === input.value.length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    else if (input.value.length !== parseInt(inputLength) & input.value.length > 0) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    };
        
    
});






