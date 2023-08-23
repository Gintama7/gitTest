const header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px black';

// const ul = document.getElementById('items');
// ul.style.color = "green";

// const heading = document.getElementsByClassName('title');

// heading[0].style.fontWeight = 900;

// const items = document.getElementsByClassName('list-group-item');

// items[2].style.color= "green";

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight=900;
// }

// tagItems = document.getElementsByTagName('li');

// tagItems[4].style.color = "yellow";

//Second list element colour changed to green
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// //Second list element visibility changed to hidden
// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

//font colour change to green for second element
// let listQueries = document.querySelectorAll('.list-group-item');
// listQueries[1].style.color = 'green';

// let odd = document.querySelectorAll('li:nth-child(odd)');

// for(let i=0;i<odd.length ;i++)
// {
//     odd[i].style.backgroundColor = 'green';
// }

//TRAVERSING THE DOM

let itemList = document.querySelector('#items');

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';


//lastChild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement

//create a div
let newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add attribute
newDiv.setAttribute('title','Hello Div');

//create text node
let newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);
