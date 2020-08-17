const items = document.querySelector('.items');
const addItems = document.querySelector('.add-items');
const itemsList = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault(); // prevents reloading of page on form submission
    const name = (this.querySelector('input[type=text]')).value;
    const item = {
        name,
        done: false
    }
    itemsList.push(item);

    populateList(itemsList, items);

    // persistance can be achieved by storing in localStorage
    localStorage.setItem('items', JSON.stringify(itemsList));
    
    this.reset(); // clears out the form on submission
}

function populateList(foodItems = [], items) {
    items.innerHTML = foodItems.map((item, index) => {
        return `<li>
            <input type='checkbox' data-index=${index} id='item-${index}' ${item.done ? 'checked' : ''}>
            <label for='item-${index}'>${item.name}</label>
        </li>`;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip if target isn't input (checkbox)
    const el = e.target;
    const index = el.dataset.index;
    itemsList[index].done = !itemsList[index].done;
    localStorage.setItem('items', JSON.stringify(itemsList));
    populateList(itemsList, items);
}

// create functions for check all, uncheck all, clear all

addItems.addEventListener('submit', addItem);
items.addEventListener('click', toggleDone);

populateList(itemsList, items);