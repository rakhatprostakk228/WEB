function sum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let summa = num1 + num2;

    document.getElementById('resultOfSum').innerHTML = `
        Sum is ${summa}
    `;
}

function square() {
    const square = parseFloat(document.getElementById('squareNum').value);

    if (isNaN(square)) {
        document.getElementById('resultOfSquare').innerHTML = 'Please enter a valid number.';
        return;
    }

    let res = Number.isInteger(Math.sqrt(square));
    let root = res ? true : false;

    document.getElementById('resultOfSquare').innerHTML = `Result: ${root}`;
}

function evenOrOdd() {
    const number1 = parseInt(document.getElementById('st').value);
    const number2 = parseInt(document.getElementById('sn').value);
    const number3 = parseInt(document.getElementById('rd').value);

    if (number1 % 2 === 0 && number2 % 2 === 0 && number3 % 2 === 0) {
        document.getElementById('resultOfEven').innerHTML = "result: even";
    }

    else if (number1 % 2 !== 0 && number2 % 2 !== 0 && number3 % 2 !== 0) {
        document.getElementById('resultOfEven').innerHTML = "result: odd";
    }
    
    else {
        document.getElementById('resultOfEven').innerHTML = "result: even and odd.";
    }
}