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

  test('can add two decimal numbers', () => {
    expected =  5.3469809999999995;
    actual = sum(2.23467, 3.112311);
    expect(actual).toBe(expected);   
  });

  test('can add zero', () => {
    expected = 22;
    actual = sum(22, 0);
    expect(actual).toBe(expected); 
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 3;
    actual = subtract(4, 1);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 91020000;
    actual = subtract(91200000, 180000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = 174375000000;
    actual = subtract(175000000000, 625000000);
    expect(actual).toBe(expected);
  });

  test('can subtract two decimal numbers', () => {
    expected = -0.39999999999999997;
    actual = subtract(-0.7, -0.3);
    expect(actual).toBe(expected);   
  });

  test('can subtract zero', () => {
    expected = 500;
    actual = subtract(500, 0);
    expect(actual).toBe(expected); 
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 1;
    actual = multiply(1, 1);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 112320000000000;
    actual = multiply(2400000, 46800000);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 6471110400000;
    actual = multiply(-8088888, -800000);
    expect(actual).toBe(expected); 
  });

  test('can multiply two decimal numbers', () => {
    expected = 77777692222.23;
    actual = multiply(999999.9, 77777.7);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(17856877731, 0);
    expect(actual).toBe(expected);
  });

  // Extension 4: Using '.toBeCloseTo(number, numDigits?)' matcher
  test('can multiply two decimal numbers', () => {
    expect(1.6 * 1.9).toBeCloseTo(3.04, 2);
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

  test('can divide two negative numbers', () => {
    expected = 15.5651118026446;
    actual = divide(-987690878, -63455431);
    expect(actual).toBe(expected);
  });

  test('can divide two decimal numbers', () => {
    expected = 7.64449085350528;
    actual = divide(-16.72821, -2.18827);
    expect(actual).toBe(expected);   
  });

  test('can divide by zero', () => {
    expected = Infinity;
    actual = divide(900, 0);
      expect(actual).toBe(expected);
  });

  // Extension 4: Using '.toBeCloseTo(number, numDigits?)' matcher
  test('can divide two decimal numbers', () => {
    expect(0.2 / 0.9).toBeCloseTo(0.2, 1);
  });
    
});


describe('modulus', () => {

  test('can calculate modulus of two small numbers', () => {
    expected = 1;
    actual = modulus(11, 2);
    expect(actual).toBe(expected);  
  });

  test('can calculate modulus of two large numbers', () => {
    expected =   2517241;
    actual = modulus(98276521, 3546640);
    expect(actual).toBe(expected);
  });

  test('can calculate modulus of negative numbers', () => {
    expected = -294;
    actual = modulus(-10980, -411);
    expect(actual).toBe(expected);
  });

  test('can calculate modulus of two decimal numbers', () => {
    expected = 70.98689000000002;
    actual = modulus(781.998, 711.01111);
    expect(actual).toBe(expected);  
  });

  test('can calculate modulus of zero', () => {
    expected = 0;
    actual = modulus(0, 166);
    expect(actual).toBe(expected);
  });

  // Extension 4: Using '.toBeCloseTo(number, numDigits?)' matcher
  test('can calculate modulus of two decimal numbers', () => {
    expect(5.5 % 2.1).toBeCloseTo(1.29, 1);
  });

});

describe('even', () => {

  test('can find out whether a small number is even', () => {
    expected = true;
    actual = even(18);
    expect(actual).toBe(expected);
  });

  test('can find out whether a large number is even', () => {
    expected = true;
    actual = even(123465789123456); // This is almost the maximum number of digits for testing
    expect(actual).toBe(expected);
  });

  test('can find out whether a negative number is even', () => {
    expected = false;
    actual = even(-3477);
    expect(actual).toBe(expected);
  });

  test('can find out whether a decimal number is even', () => {
    expected = false;
    actual = even(0.5679);
    expect(actual).toBe(expected);
  });

  test('can find out whether zero is even', () => {
    expected = true;
    actual = even(0);
    expect(actual).toBe(expected);
  });

  // Extension 4: Using '.not' modifier
  test('can find out whether a large number is even', () => {
    expect(119007).not.toBe('true');
  });
    
});

describe('odd', () => {

  test('can find out whether a small number is odd', () => {
    expected = true;
    actual = odd(7);
    expect(actual).toBe(expected);
  });

  test('can find out whether a large number is odd', () => { 
    expected = true;
    actual = odd(733333333);
    expect(actual).toBe(expected);
  });

  test('can find out whether a negative number is odd', () => {
    expected = false;
    actual = odd(-22222);
    expect(actual).toBe(expected);
  });

  test('can find out whether a decimal number is odd', () => {
    expected = true;
    actual = odd(53.7);
    expect(actual).toBe(expected);
  });

  test('can find out whether zero is odd', () => {
    expected = false;
    actual = odd(0);
    expect(actual).toBe(expected);
  });

  // Extension 4: Using '.not' modifier
  test('can find out whether zero is odd', () => {
    expect(0).not.toBe('true');
  });

});
