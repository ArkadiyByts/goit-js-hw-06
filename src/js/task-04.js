const counterValue = document.querySelector('#value').textContent;

console.log(Number(counterValue) + 10);

const firstBtn = document.body.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
const secondBtn = document.body.firstChild.nextSibling.nextSibling.nextSibling.lastChild.previousSibling;
console.log(secondBtn);

firstBtn.addEventListener("click", () => {
    counterValue = Number(counterValue) - 1;
});

