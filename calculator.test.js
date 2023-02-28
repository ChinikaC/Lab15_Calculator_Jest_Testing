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
    expected = 402000000;
    actual = sum(390000000, 12000000);
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
    expected = 174375000000;
    actual = subtract(175000000000, 625000000);
    expect(actual).toBe(expected);
    
  });

});

describe('multiply', () => {

  test('can multiply two large negative numbers', () => {
    expected = 6471110400000;
    actual = multiply(-8088888, -800000);
    expect(actual).toBe(expected);
    
  });

  test('can multiply two large decimal numbers', () => {
    expected = 77777692222.23;
    actual = multiply(999999.9, 77777.7);
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
    expected =  8.333333333333334;
    actual = divide(50000000, 6000000);
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
    actual = even(123465789123456); // This is almost the maximum of testing
    expect(actual).toBe(expected);
    
  });

  test('can find out whether a decimal number is even', () => {
    expected = false;
    actual = even(0.5679);
    expect(actual).toBe(expected);
    
  });

});

describe('odd', () => {

  test('can find out whether a negative number is odd', () => {
    expected = true;
    actual = odd(-555555);
    expect(actual).toBe(expected);
    
  });

  test('can find out whether zero is odd', () => {
    expected = false;
    actual = odd(0);
    expect(actual).toBe(expected);
    
  });

});
