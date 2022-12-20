let input = document.querySelector('#name-input');
let span = document.querySelector('#name-output');

console.log(input);
console.log(span);

input.addEventListener('input', (event) => {
    span.textContent = 'Anonymous';
   
    if (event.currentTarget.value !== "") {
        span.textContent = event.currentTarget.value; 
        console.log(span.textContent);
    };
    
});




console.log(span.textContent);