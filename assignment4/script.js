function validateForm() {
    let isValid = true;

    document.getElementById('usernameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    if (username.trim() = '') {
        document.getElementById('usernameError').innerHTML = 'First name is required!';
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() = '') {
        document.getElementById('emailError').innerHTML = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerHTML = 'Enter a valid email address';
        isValid = false;
    }

    return isValid;
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    const errorElement = document.getElementById('error');

    errorElement.innerHTML = '';

    if (task === '') {
        errorElement.innerHTML = 'Task cannot be empty';
        return;
    }

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    li.innerHTML = `
        <span>${task}</span>
        <div>
            <button class="btn btn-success btn-sm me-2" onclick="markComplete(this)">Complete</button>
            <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';
}

function markComplete(button) {
    const taskItem = button.parentNode.parentNode;
    taskItem.querySelector('span').classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentNode.parentNode;
    taskItem.remove();
}

function sortNumbers() {
    const numbersInput = document.getElementById('numbers').value.trim();
    const sortOrder = document.getElementById('sortOrder').value;
    const errorNumbers = document.getElementById('errorNumbers');
    const resultElement = document.getElementById('sortedResult');
    
    errorNumbers.innerHTML = '';
    resultElement.innerHTML = '';

    const numberArray = numbersInput.split(',').map(num => num.trim());

    if (numberArray.some(isNaN)) {
        errorNumbers.innerHTML = 'Please enter a valid series of numbers separated by commas.';
        return;
    }

    const validNumbers = numberArray.map(Number);

    validNumbers.sort((a, b) => {
        return sortOrder === 'ascending' ? a - b : b - a;
    });

    resultElement.innerHTML = validNumbers.join(', ');
}