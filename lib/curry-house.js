var curry = require('./curry');

function calculate (arg1) {
  return function(arg2) {
    switch (arg2) {
      case 'add':
      case '+':
        return function(arg3) {
          return arg1 + arg3;
        };
      case 'subtract':
      case '-':
        return function(arg3) {
          return arg1 - arg3;
        };
      case 'multiply':
      case '*':
        return function(arg3) {
          return arg1 * arg3;
        };
      case 'divide':
      case '/':
        return function(arg3) {
          return arg1 / arg3;
        };
      case 'modulo':
      case '%':
        return function(arg3) {
          return arg1 % arg3;
        };
      case 'power of':
      case '^':
        return function(arg3) {
          return Math.pow(arg1, arg3);
        };
    }
  };
}

function random (start) {
  return {
    to: function(end) {
      return Math.floor(Math.random() * (end - start) + start);
    },
    toInclude: function(end) {
      return Math.floor(Math.random() * (end - start + 1) + start);
    }
  };
}

function concat(arg1, arg2) {
  return arg1.toString() + arg2.toString();
}

var prependGreeting = curry(concat, 'Hello ');

function add (op1, op2, op3) {
  return op1 + op2 + op3;
}

var add4and5 = curry(add, 4, 5);

function calculator(operation) {
  return function(op1, op2) {
    return calculate(op2)(operation)(op1);
  };
}

var add5 = curry(calculator('+'), 5);
var sub5 = curry(calculator('-'), 5);
var multiply5 = curry(calculator('*'), 5);
var divide5 = curry(calculator('/'), 5);
var mod5 = curry(calculator('%'), 5);
var pow3 = curry(calculator('^'), 3);

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};