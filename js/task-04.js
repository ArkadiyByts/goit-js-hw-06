let span = document.querySelector('#value');
let counterValue = parseInt(document.querySelector('#value').textContent);

console.log(typeof counterValue);
console.log(span);
//const firstBtn = document.querySelector('button[data-action="decrement"]');
const firstBtn = document.body.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
//const secondBtn = document.querySelector('button[data-action="increment"]');
const secondBtn = document.body.firstChild.nextSibling.nextSibling.nextSibling.lastChild.previousSibling;
console.log(firstBtn);
console.log(secondBtn);
firstBtn.textContent = '-2';
secondBtn.textContent = '+2';

firstBtn.addEventListener("click", () => {
    counterValue -= 2;
    console.log(counterValue);
    span.textContent = `${counterValue}`;
});
secondBtn.addEventListener("click", () => {
    counterValue += 2;
    console.log(counterValue);
    span.innerHTML = `<span id="value">${counterValue}</span>`;
});
//firstBtn.addEventListener('click', decrement);
