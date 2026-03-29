const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

describe('addition', () => {
  test('adds two positive numbers', () => {
    expect(addition(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number', () => {
    expect(addition(5, -3)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(addition(-4, -6)).toBe(-10);
  });

  test('adds zero', () => {
    expect(addition(7, 0)).toBe(7);
  });
});

describe('subtraction', () => {
  test('subtracts two positive numbers', () => {
    expect(subtraction(10, 4)).toBe(6);
  });

  test('subtracts resulting in a negative number', () => {
    expect(subtraction(3, 8)).toBe(-5);
  });

  test('subtracts zero', () => {
    expect(subtraction(5, 0)).toBe(5);
  });
});

describe('multiplication', () => {
  test('multiplies two positive numbers', () => {
    expect(multiplication(3, 4)).toBe(12);
  });

  test('multiplies by zero', () => {
    expect(multiplication(5, 0)).toBe(0);
  });

  test('multiplies two negative numbers', () => {
    expect(multiplication(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiplication(3, -4)).toBe(-12);
  });
});

describe('division', () => {
  test('divides two positive numbers', () => {
    expect(division(10, 2)).toBe(5);
  });

  test('divides resulting in a decimal', () => {
    expect(division(7, 2)).toBe(3.5);
  });

  test('throws error on division by zero', () => {
    expect(() => division(5, 0)).toThrow('Division by zero is not allowed');
  });
});

describe('modulo', () => {
  test('returns remainder of division', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns zero when evenly divisible', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('modulo with negative dividend', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('throws error on modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed');
  });
});

describe('power (exponentiation)', () => {
  test('calculates positive integer power', () => {
    expect(power(2, 10)).toBe(1024);
  });

  test('calculates power of zero exponent', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('calculates power of one', () => {
    expect(power(5, 1)).toBe(5);
  });

  test('calculates fractional exponent', () => {
    expect(power(4, 0.5)).toBe(2);
  });

  test('calculates negative exponent', () => {
    expect(power(2, -1)).toBe(0.5);
  });
});

describe('squareRoot (square root)', () => {
  test('returns square root of a positive number', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('returns square root of 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('returns square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135, 5);
  });

  test('throws error for square root of a negative number', () => {
    expect(() => squareRoot(-4)).toThrow(
      'Square root of a negative number is not allowed'
    );
  });
});
