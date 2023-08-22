const header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px black';

// const ul = document.getElementById('items');
// ul.style.color = "green";

const heading = document.getElementsByClassName('title');

heading[0].style.fontWeight = 900;

const items = document.getElementsByClassName('list-group-item');

items[2].style.color= "green";

for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight=900;
}

tagItems = document.getElementsByTagName('li');

tagItems[4].style.color = "yellow";