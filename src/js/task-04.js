const counterValue = document.querySelector('#value').textContent;

console.log(counterValue);

const firstBtn = document.body.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
const secondBtn = document.body.firstChild.nextSibling.nextSibling.nextSibling.lastChild.previousSibling;
console.log(secondBtn);

firstBtn.addEventListener("click", () => {
    //Number(counterValue) + 1;
    return (counterValue + 'fuck');
});

