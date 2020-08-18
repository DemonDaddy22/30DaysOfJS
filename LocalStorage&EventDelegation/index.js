const items = document.querySelector('.items');
const addItems = document.querySelector('.add-items');
const checkBtn = document.querySelector('#check');
const uncheckBtn = document.querySelector('#uncheck');
const deleteBtn = document.querySelector('#delete');

let itemsList = JSON.parse(localStorage.getItem('items')) || [];

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
    if (foodItems.length !== 0) {
        items.innerHTML = foodItems.map((item, index) => {
            return `<li>
            <input type='checkbox' data-index=${index} id='item-${index}' ${item.done ? 'checked' : ''}>
            <label for='item-${index}'>${item.name}</label>
        </li>`;
        }).join('');
    } else {
        items.innerHTML = `<li>No items added yet</li>`;
    }
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip if target isn't input (checkbox)
    const el = e.target;
    const index = el.dataset.index;
    itemsList[index].done = !itemsList[index].done;
    localStorage.setItem('items', JSON.stringify(itemsList));
    populateList(itemsList, items);
}

function checkAll() {
    itemsList.forEach(item => item.done = true);
    localStorage.setItem('items', JSON.stringify(itemsList));
    populateList(itemsList, items);
}

function uncheckAll() {
    itemsList.forEach(item => item.done = false);
    localStorage.setItem('items', JSON.stringify(itemsList));
    populateList(itemsList, items);
}

function deleteAll() {
    itemsList = [];
    localStorage.setItem('items', JSON.stringify(itemsList));
    populateList(itemsList, items);
}

// create functions for check all, uncheck all, clear all

addItems.addEventListener('submit', addItem);
items.addEventListener('click', toggleDone);
checkBtn.addEventListener('click', checkAll);
uncheckBtn.addEventListener('click', uncheckAll);
deleteBtn.addEventListener('click', deleteAll);

populateList(itemsList, items);