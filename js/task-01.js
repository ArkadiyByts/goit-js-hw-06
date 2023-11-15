// const root = document;
// const html = root.lastChild;
// const body = html.lastChild;
// const goBackLink = document.body.children[0];
// const mainList = document.body.children[1];
// const firstItem = mainList.firstElementChild;
// const secondItem = mainList.firstElementChild.nextElementSibling;
// const lastItem = mainList.lastElementChild;
// const textOfSecondItem = firstItem.nextElementSibling.textContent;
// const categoriesCount = mainList.childElementCount;
// const firstCategoryTitle = firstItem.firstElementChild.textContent;
// const secondCategoryTitle = secondItem.firstElementChild.textContent;
// const lastCategoryTitle = lastItem.firstElementChild.textContent;
// const animalsItemsCount = firstItem.lastElementChild.childElementCount;
// const productsItemsCount = secondItem.lastElementChild.childElementCount;
// const technologiesItemsCount = lastItem.lastElementChild.childElementCount;

//console.log('Number of categories: ' + categoriesCount);

//console.log('Category: ' + firstCategoryTitle);
//console.log('Elements: ' + animalsItemsCount);

//console.log('Category: ' + secondCategoryTitle);
//console.log('Elements: ' + productsItemsCount);

//console.log('Category: ' + lastCategoryTitle);
//console.log('Elements: ' + technologiesItemsCount);

//remake below
const allCategories = document.getElementsByTagName('h2');
console.log('Number of categories: ' + allCategories.length);
for (let category of allCategories) {
    console.log('Category: ' + category.textContent);
    console.log('Elements: ' + category.nextElementSibling.childElementCount);
};