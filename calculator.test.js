const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 500;
    actual = sum(300, 200);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -15;
    actual = sum(-9, -6);
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    expected = 22;
    actual = sum(22, 0);
    expect(actual).toBe(expected);
    
  });

});

describe('subtract', () => {

  test('can subtract two small decimal numbers', () => {
    expected = 0.39999999999999997;
    actual = subtract(0.7, 0.3);
    expect(actual).toBe(expected);
    
  });

  test('can subtract two large negative numbers', () => {
    expected = 400;
    actual = subtract(1000, 600);
    expect(actual).toBe(expected);
    
  });

});

describe('multiply', () => {

  test('can multiply two large negative numbers', () => {
    expected = 64000;
    actual = multiply(-800, -80);
    expect(actual).toBe(expected);
    
  });

  test('can multiply two large decimal numbers', () => {
    expected = 7762.2300000000005;
    actual = multiply(99.9, 77.7);
    expect(actual).toBe(expected);
    
  });

});

describe('divide', () => {

  test('can divide two small numbers', () => {
    expected = 4;
    actual = divide(8, 2);
    expect(actual).toBe(expected);
    
  });

  test('can divide two large numbers', () => {
    expected = 83.33333333333333;
    actual = divide(50000, 600);
    expect(actual).toBe(expected);
    
  });

});

describe('modulus', () => {
  test('can modulo two small numbers', () => {
    expected = 1;
    actual = modulus(11, 2);
    expect(actual).toBe(expected);
    
  });

  test('can modulo two decimal numbers', () => {
    expected = 1.9999999999999978;
    actual = modulus(54.5, 2.1);
    expect(actual).toBe(expected);
    
  });
  

});

describe('even', () => {
  test('can find out whether a large number is even', () => {
    expected = true;
    actual = even(420);
    expect(actual).toBe(expected);
    
  });

  test('can find out whether a decimal number is even', () => {
    expected = false;
    actual = even(0.5);
    expect(actual).toBe(expected);
    
  });

});

describe('odd', () => {

  test('can find out whether a small number is odd', () => {
    expected = true;
    actual = odd(5);
    expect(actual).toBe(expected);
    
  });

  test('can find out whether zero is odd', () => {
    expected = false;
    actual = odd(0);
    expect(actual).toBe(expected);
    
  });

});
