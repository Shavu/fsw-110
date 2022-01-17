let item = document.getElementById('item');
let details = document.getElementById('details');

let form = document.getElementById('form');
let ul = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let parentList = document.createElement('li');
    parentList.className = 'parentList';
    let subList = document.createElement('ul');
    let nestedList1 = document.createElement('li');

    parentList.textContent = item.value;
    subList.textContent = details.value;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', (e) => {
        let removeBtn = e.target;
        removeBtn.parentNode.parentNode.parentNode.remove();
    });

    ul.appendChild(parentList);
    parentList.appendChild(subList);
    subList.appendChild(nestedList1);
    nestedList1.appendChild(deleteBtn);

    item.value = "";
    details.value = "";

});