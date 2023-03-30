// Exercise one
function capitalize(item) {
    const firstChar = item[0].toUpperCase();
    const restChar = item.slice(1);
    return firstChar + restChar
}

// Exercise two
function reverseString(item) {
    let reversed = '';
    for (let i = item.length - 1; i >= 0; i--) {
        reversed += item[i];
    }
    return reversed;
}

// Exercise three
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const calculator = {
    add,
    subtract,
    divide,
    multiply,
};

// Exercise four - Cesar Cipher
function cesarCipher(item, factor) {
    if (factor == 0) return item;

    let result = '';
    for (let i = 0; i < item.length; i++) {
        let temp = item[i].charCodeAt(0);
        if (temp == 90) temp = 65 + (factor - 1);
        else if (temp == 122) temp = 97 + (factor - 1);
        else temp += factor;

        result += String.fromCharCode(temp);
    }
    return result;
}

// Exercise five
function analyzeArray(item) {
    const length = item.length
    let min = item[0];
    let max = 0;
    let total = 0;
    for (let i = 0; i < length; i++) {
        if (item[i] < min) min = item[i];
        if (item[i] > max) max = item[i];
        total += item[i];
    }

    const average = total / length;

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}


module.exports = {capitalize, reverseString, calculator, cesarCipher, analyzeArray};