const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const imgFrame = images.map((image) => `<li><img src='${image.url}' alt='${image.alt}'></li>`).join("");

const galleryList = document.querySelector("ul");

galleryList.insertAdjacentHTML('afterbegin', imgFrame);

const listItems = galleryList.children;
galleryList.style.listStyleType = 'none';
document.body.style.backgroundColor = "lightblue";

const firstImagesSize = document.querySelector("img");
const secondImagesSize = galleryList.firstChild.nextSibling.firstChild;
const lastImagesSize = galleryList.lastChild.firstChild;

firstImagesSize.style.width = '300px';
secondImagesSize.style.width = '300px';
lastImagesSize.style.width = '300px';
