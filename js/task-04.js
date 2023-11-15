let span = document.querySelector('#value');
let counterValue = parseInt(document.querySelector('#value').textContent);

console.log(typeof counterValue);
console.log(span);
// const firstBtn = document.body.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
const allBtn = document.getElementsByTagName('button');
const firstBtn = allBtn[0];
// const secondBtn = document.body.firstChild.nextSibling.nextSibling.nextSibling.lastChild.previousSibling;
const secondBtn = allBtn[1];
console.log(firstBtn);
console.log(secondBtn);
firstBtn.textContent = '-2';
secondBtn.textContent = '+2';

firstBtn.addEventListener("click", () => {
    counterValue -= 2;
    //console.log(counterValue);
    span.textContent = `${counterValue}`;
});
secondBtn.addEventListener("click", () => {
    counterValue += 2;
    //console.log(counterValue);
    span.innerHTML = `<span id="value">${counterValue}</span>`;
});
//firstBtn.addEventListener('click', decrement);
