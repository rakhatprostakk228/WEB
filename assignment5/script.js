function validateForm() {
    let isValid = true;

    document.getElementById('usernameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    if (username.trim() === '') {
        document.getElementById('usernameError').innerHTML = 'First name is required!';
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() === '') {
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

function displayDateTime() {
    const dateTimeContainer = document.getElementById('date-time');
    
    const now = new Date();
    
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    
    const formattedDateTime = now.toLocaleString('en-US', options);
    
    dateTimeContainer.textContent = formattedDateTime;
}

setInterval(displayDateTime, 1000);

displayDateTime();

function startGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess = null;
    let attempts = 0;

    while (guess !== randomNumber) {
        guess = parseInt(prompt("Guess a number between 1 and 100:"));
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("INVALID!!!(ne ti)");
            continue;
        }

        attempts++;

        if (guess > randomNumber) {
            alert("pereshel");
        } else if (guess < randomNumber) {
            alert("ne doshel");
        } else {
            alert(`Kutty bolsyn! Ti ugadal ${randomNumber} vsego za ${attempts} popitok.`);
            document.getElementById("game-result").textContent = `Kutty bolsyn! Ti ugadal ${randomNumber} vsego za ${attempts} popitok.`;
            break;
        }
    }
}

function toggleTheme() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');

    body.classList.toggle('night');
    body.classList.toggle('day');
    navbar.classList.toggle('night');
    navbar.classList.toggle('day');

    const themeToggleLink = document.getElementById('theme-toggle');
    if (body.classList.contains('night')) {
        themeToggleLink.innerHTML = '🌞';
    } else {
        themeToggleLink.innerHTML = '🌙';
    }
}

function changeLanguage() {
    const language = document.getElementById('languageSelector').value;
    const texts = {
        en: {
            title: "Hello there",
            subscribeText: "Subscribe to Our Travel Newsletter",
            emailText: "hello@welcometravel",
            phoneText: "(707) 7065 9970",
            addressText1: "300 King Street, Melbourne",
            addressText2: "82B, Japan, Tokyo",
            successMessage: "Thank you for subscribing! We will keep you updated."
        },
        ru: {
            title: "Приветствую",
            subscribeText: "Подпишитесь на нашу новостную рассылку о путешествиях",
            emailText: "hello@welcometravel",
            phoneText: "(707) 7065 9970",
            addressText1: "300 Кинг Стрит, Мельбурн",
            addressText2: "82B, Япония, Токио",
            successMessage: "Спасибо за подписку! Мы будем держать вас в курсе."
        },
        kk: {
            title: "Сәлеметсіз бе",
            subscribeText: "Саяхат туралы ақпараттық бюллетеньге жазылыңыз",
            emailText: "hello@welcometravel",
            phoneText: "(707) 7065 9970",
            addressText1: "Кинг көшесі 300, Мельбурн",
            addressText2: "82B, Жапония, Токио",
            successMessage: "Жазылу үшін рахмет! Біз сізді жаңартып отырамыз."
        }
    };

    const selectedTexts = texts[language];
    document.getElementById('mainTitle').textContent = selectedTexts.title;
    document.getElementById('subscribeText').textContent = selectedTexts.subscribeText;
    document.getElementById('emailText').textContent = selectedTexts.emailText;
    document.getElementById('phoneText').textContent = selectedTexts.phoneText;
    document.getElementById('addressText1').textContent = selectedTexts.addressText1;
    document.getElementById('addressText2').textContent = selectedTexts.addressText2;
}

document.addEventListener("DOMContentLoaded", function () {
    const allCardFooters = document.querySelectorAll('.card-footer');

    allCardFooters.forEach(footer => {
        const stars = footer.querySelectorAll('.star');
        
        stars.forEach((star, index) => {
            star.addEventListener('click', function () {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add('selected');
                    } else {
                        s.classList.remove('selected');
                    }
                });
            });
        });
    });
});