/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Tests cover all supported operations:
 *   - addition       (+)
 *   - subtraction    (-)
 *   - multiplication (*)
 *   - division       (/)
 *   - modulo         (%)
 *   - power          (**)
 *   - squareRoot     (sqrt)
 *
 * Also covers edge cases: division by zero, modulo by zero,
 * square root of negative numbers, negatives, decimals, identity values.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// --- Addition (+) ---
describe('add', () => {
  test('2 + 3 = 5 (image example)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds a positive and a negative number', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adding zero returns the same number', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// --- Subtraction (-) ---
describe('subtract', () => {
  test('10 - 4 = 6 (image example)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts two positive numbers', () => {
    expect(subtract(15, 5)).toBe(10);
  });

  test('subtracts to produce a negative result', () => {
    expect(subtract(3, 8)).toBe(-5);
  });

  test('subtracts a negative number (double negative)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.5)).toBeCloseTo(3.0);
  });
});

// --- Multiplication (*) ---
describe('multiply', () => {
  test('45 * 2 = 90 (image example)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(5, -4)).toBe(-20);
  });

  test('multiplies two negative numbers yields positive', () => {
    expect(multiply(-3, -3)).toBe(9);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test('multiplying by one returns the same number', () => {
    expect(multiply(8, 1)).toBe(8);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// --- Division (/) ---
describe('divide', () => {
  test('20 / 5 = 4 (image example)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(9, 3)).toBe(3);
  });

  test('divides to produce a decimal result', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative number by a positive number', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides two negative numbers yields positive', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('dividing zero by a number returns zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});

// --- Modulo (%) ---
describe('modulo', () => {
  test('5 % 2 = 1 (image example)', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns zero when a is evenly divisible by b', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('works with larger dividend', () => {
    expect(modulo(17, 3)).toBe(2);
  });

  test('returns the dividend when b is larger than a', () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test('works with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('works with negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('modulo of zero by a number returns zero', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  // Edge case: modulo by zero
  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero');
  });
});

// --- Power (**) ---
describe('power', () => {
  test('2 ^ 3 = 8 (image example)', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises a number to the power of 1 returns itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a number to the power of 0 returns 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('raises a negative base to an even exponent yields positive', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd exponent yields negative', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('handles fractional exponents', () => {
    expect(power(27, 1 / 3)).toBeCloseTo(3);
  });

  test('handles decimal base', () => {
    expect(power(2.5, 2)).toBeCloseTo(6.25);
  });
});

// --- Square Root (sqrt) ---
describe('squareRoot', () => {
  test('sqrt(16) = 4 (image example)', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('sqrt of 0 returns 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('sqrt of 1 returns 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('sqrt of a perfect square', () => {
    expect(squareRoot(25)).toBe(5);
  });

  test('sqrt of a non-perfect square returns decimal', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135);
  });

  test('sqrt of a decimal number', () => {
    expect(squareRoot(0.25)).toBeCloseTo(0.5);
  });

  // Edge case: square root of negative number
  test('throws an error for square root of a negative number', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of negative number');
  });

  test('throws an error for square root of a large negative number', () => {
    expect(() => squareRoot(-100)).toThrow('Square root of negative number');
  });
});
