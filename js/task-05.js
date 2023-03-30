//let input = document.querySelector('#name-input');
const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

//console.log(inputEl.placeholder);
//console.log(spanEl.textContent);

inputEl.addEventListener('input', (event) => {
    spanEl.textContent = 'Anonymous';
   
    if (event.currentTarget.value !== "") {
        spanEl.textContent = event.currentTarget.value.charAt().toUpperCase() + event.currentTarget.value.slice(1); 
        //previous code line changes content with auto capitalize first letter from input
    };
    
});




//console.log(spanEl.textContent);