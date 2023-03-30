function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const space = document.querySelector('body');

const changeBtn = document.querySelector(".change-color");

const titleValue = document.querySelector('.color');
console.log(titleValue);
changeBtn.addEventListener('click', () => {
  space.style.backgroundColor = getRandomHexColor();
  titleValue.textContent = getRandomHexColor();
});

