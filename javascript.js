'use strict';

document.querySelector('input').addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        submitButton();
        console.log('its ok')        
    }
});

function submitButton() {
    const point = document.getElementById('input_point');
    if ( point.value !== '') {
        addToDo(point);
        point.value = '';
        const attBlock = document.querySelector('.attention');
        attBlock.style.display = 'none';
        point.style.border = 'none';
    } else {
        error();
    }
    
} 

function addToDo(point) {
    const toDoList = document.querySelector('.todo-ol');

    const elements = {
        li: document.createElement('li'),
        done: document.createElement('i'),
        undone: document.createElement('i'),
        trash: document.createElement('i'),
    }

    elements.li.innerHTML = elements.li.innerHTML + point.value;
    elements.done.classList.add('fa', 'fa-thumbs-up');
    elements.undone.classList.add('fa', 'fa-thumbs-down');
    elements.trash.classList.add('fa', 'fa-trash');
    elements.li.appendChild(elements.done);
    elements.li.appendChild(elements.undone);
    elements.li.appendChild(elements.trash);

    toDoList.insertBefore(elements.li, toDoList.lastChild);
    elements.done.addEventListener('click', doIt);
    elements.undone.addEventListener('click', didNot);
    elements.trash.addEventListener('click', resetPoint);
}

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', submitButton);

function resetButton() {

    let point = document.getElementById("input_point").value;
    document.getElementById("input_point").value = null;
    document.querySelector(".todo-ol").innerHTML = '';
}

const deleteButton = document.getElementById('reset-button');
deleteButton.addEventListener('click', resetButton);

function error() {
    const attBlock = document.querySelector('.attention');
    attBlock.style.display = 'block';
    document.getElementById('input_point').style.border = '1px solid red';
}

function doIt() {
    this.closest('li').classList.remove('didnt');
    this.closest('li').classList.add('done');
    this.style.display = 'none';
    this.nextSibling.style.display = 'block';
}

function didNot() {
    this.closest('li').classList.toggle('done');
    this.closest('li').classList.toggle('didnt');
    this.previousSibling.style.display = 'block';
    this.style.display = 'none';
}

function resetPoint() {
    this.closest('li').remove();
}

function hideButton() {
    const hidBut = document.getElementsByClassName('done');
    
    for (let i = 0; i < hidBut.length; i++) {
        hidBut[i].style.display = 'none';
    }
}

document.getElementById('hide-button').addEventListener('click', hideButton);

function showDone() {
    const showBut = document.getElementsByClassName('done');

    for (let i = 0; i < showBut.length; i++) {
        showBut[i].style.display = 'block';
    }
}

document.getElementById('show-button').addEventListener('click', showDone);

