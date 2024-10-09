function multiply() {
    const num1 = parseFloat(document.getElementById('1st').value);
    const num2 = parseFloat(document.getElementById('2nd').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const multiplication = num1 * num2;

        document.getElementById('result').innerHTML = `
            Multiplication: ${multiplication}
        `;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid numbers';
    }
}

function division() {
    const num1 = parseFloat(document.getElementById('1st').value);
    const num2 = parseFloat(document.getElementById('2nd').value);

    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
        const division = num1 / num2;

        document.getElementById('result').innerHTML = `
            Division: ${division}
        `;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid numbers';
    }
}

function largestNum() {
    const lg1 = parseInt(document.getElementById('lg1st').value);
    const lg2 = parseInt(document.getElementById('lg2nd').value);
    const lg3 = parseInt(document.getElementById('lg3rd').value);
    const largest = Math.max(lg1, lg2, lg3);

    document.getElementById('result2').innerHTML = `
        Largest Number: ${largest}
    `;
}

function sum() {
    const sum1 = parseInt(document.getElementById('1sum').value);
    const sum2 = parseInt(document.getElementById('2sum').value);

    if (sum1 === sum2) {
        const result = 3 * (sum1 + sum2);

        document.getElementById('result3').innerHTML = `
            Sum: ${result}
        `;
    } else {
        result = sum1 + sum2;

        document.getElementById('result3').innerHTML = `
            Sum: ${result}
        `;
    }
}

function hundred() {
    const hun1 = parseInt(document.getElementById('1hnd').value);
    const hun2 = parseInt(document.getElementById('2hnd').value);

    const huns1 = Math.abs(100 - hun1);
    const huns2 = Math.abs(100 - hun2);
    let res;

    if (huns1 < huns2) res = hun1;
    else if (huns1 > huns2) res = hun2;
    else res = false;

    document.getElementById('result4').innerHTML = `
        Nearest to 100 is ${res}
    `;
}

function half() {
    const text = document.getElementById('text').value;

    if (text.length % 2 === 0) {
        const firstHalf = text.slice(0, text.length / 2);
        document.getElementById('result5').innerHTML = `
            First half is ${firstHalf}
        `;
    } else {
        document.getElementById('result5').innerHTML = 'Please enter an even-length string.';
    }
}