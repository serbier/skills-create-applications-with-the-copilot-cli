/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supported operations:
 *   addition       (+)  – sum two numbers
 *   subtraction    (-)  – find the difference between two numbers
 *   multiplication (*)  – compute the product of two numbers
 *   division       (/)  – divide two numbers (throws on division by zero)
 *   modulo         (%)  – remainder of a divided by b
 *   power          (**)  – base raised to the exponent
 *   squareRoot     (sqrt) – square root of n (throws for negative numbers)
 *
 * Usage:
 *   node calculator.js <number> <operator> <number>
 *   node calculator.js sqrt <number>
 *   Example: node calculator.js 10 + 5
 *   Example: node calculator.js sqrt 9
 */

// Returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Returns the quotient of a divided by b; throws if b is zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Returns the remainder of a divided by b; throws if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

// Returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Returns the square root of n; throws if n is negative
function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative number');
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);

  // Handle sqrt <number>
  if (args.length === 2 && args[0] === 'sqrt') {
    const n = parseFloat(args[1]);
    if (isNaN(n)) {
      console.error('Error: Operand must be a valid number.');
      process.exit(1);
    }
    try {
      console.log(`sqrt(${n}) = ${squareRoot(n)}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    process.exit(0);
  }

  if (args.length !== 3) {
    console.error('Usage: node calculator.js <number> <operator> <number>');
    console.error('       node calculator.js sqrt <number>');
    console.error('Operators: + - * / % **');
    process.exit(1);
  }

  const a = parseFloat(args[0]);
  const operator = args[1];
  const b = parseFloat(args[2]);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both operands must be valid numbers.');
    process.exit(1);
  }

  let result;
  switch (operator) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = subtract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      try {
        result = divide(a, b);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    case '%':
      try {
        result = modulo(a, b);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    case '**':
      result = power(a, b);
      break;
    default:
      console.error(`Error: Unknown operator '${operator}'. Use +, -, *, /, %, or **.`);
      process.exit(1);
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}
