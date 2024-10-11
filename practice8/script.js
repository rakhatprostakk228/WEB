function celsius() {
    const num = parseFloat(document.getElementById('num').value);

    let result = (5 * (num - 32)) / 9;

    document.getElementById('result').innerHTML = `
        ${num}°F is ${result}°C.
    `;
}

function fahrenheit() {
    const num = parseFloat(document.getElementById('num').value);

    let result = (9 * num + (32 * 5)) / 5;

    document.getElementById('result').innerHTML = `
        ${num}°C is ${result}°F.
    `;
}

function data() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayName = days[today.getDay()];

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    document.getElementById('result2').innerHTML = `
        Today is: ${dayName}. <br>
        Current time is: ${hours} ${period} : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}
    `;
}

function leap() {
    const year = document.getElementById('year').value;

    if ((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)) {
        document.getElementById('result3').innerHTML = `a leap year`;
    } else {
        document.getElementById('result3').innerHTML = `is not leap year`;
    }
}

function remove() {
    const word = document.getElementById('word').value;
    const number = document.getElementById('number').value;

    let rem = word.slice(0, number) + word.slice(number + 1);

    document.getElementById('result4').innerHTML = `${rem}`;
}