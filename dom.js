let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


//form submit event
form.addEventListener('submit', addItem);

//delete event listener
itemList.addEventListener('click',removeItem);

//filter event listener
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
    e.preventDefault();
  
    //Get input value
    let newItem =document.getElementById('item').value;
    let newDesc = document.getElementById('description').value;
    //create new li element
    let li = document.createElement('li');

    //add class
    li.className ='list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem + "" + newDesc));

    //create del button element
    let deleteBtn = document.createElement('button');
    //create edit button element
    let editBtn = document.createElement('button');

    //add class to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //add class to edit button
    editBtn.className = 'btn btn-info btn-sm float-right edit';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('Edit'));

    //append buttons to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    //append li to list
    itemList.appendChild(li);

}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    
}

//Filter Items

function filterItems(e){
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    //get list items
    let items = document.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display= 'none';
        }
    })
}