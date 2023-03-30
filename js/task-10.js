function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
let startSize = 30;
const initialData = 30;

const enteredValue = document.querySelector("input");
console.log(enteredValue);
const boxes = document.getElementById("boxes");
console.log(boxes);
const createButton = document.querySelector("[data-create]");
console.log(createButton);
const destroyButton = document.querySelector("[data-destroy]");
console.log(destroyButton);

createButton.addEventListener("click", () => {
  for (let i = 0; i < enteredValue.value; i++) {
    const newDiv = document.createElement("div");

    newDiv.style.width = `${startSize}px`;
    newDiv.style.height = `${startSize}px`;
    newDiv.style.borderRadius = '50%';
    newDiv.style.backgroundColor = `${getRandomHexColor()}`;
    startSize += 10;
    boxes.appendChild(newDiv);
  }
});

destroyButton.addEventListener("click", () => {
  boxes.innerHTML = "";
  startSize = initialData;
});