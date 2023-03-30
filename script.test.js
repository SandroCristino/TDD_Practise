const capitalize = require('./script').capitalize;
const reverseString = require('./script').reverseString;
const calculator = require('./script').calculator;
const cesarCipher = require('./script').cesarCipher;
const analyzeArray = require('./script').analyzeArray;

// Exercise one
test('Return the first char', () => {
    expect(capitalize('flower')).toBe('Flower');
});

// Exercise two
test('Return Flower backwards', () => {
    expect(reverseString('flower')).toBe('rewolf')
})
 
// Exercise three
test('add function adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-2, 3)).toBe(1);
    expect(calculator.add(0, 0)).toBe(0);
});

test('subtract function subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(-2, -3)).toBe(1);
    expect(calculator.subtract(0, 0)).toBe(0);
});

test('multiply function multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(0, 0)).toBe(0);
});

test('divide function divides two numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(-6, 3)).toBe(-2);
    expect(calculator.divide(0, 5)).toBe(0);
});

// Exercise four
test('Cipher code', () => {
    expect(cesarCipher('moin', 1)).toBe('npjo');
    expect(cesarCipher('aloha', 1)).toBe('bmpib');
    expect(cesarCipher('Moin', 0)).toBe('Moin');
    expect(cesarCipher('ola', 5)).toBe('tqf');
})

// Exercise five
test('Analyze a function', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})


  