var curry = require('./curry');

function calculate (arg1) {
  return function(arg2) {
    switch (arg2) {
      case 'add':
      case '+':
        return add(arg1);
      case 'subtract':
      case '-':
        return subtract(arg1);
      case 'multiply':
      case '*':
        return multiply(arg1);
      case 'divide':
      case '/':
        return divide(arg1);
      case 'modulo':
      case '%':
        return modulo(arg1);
      case 'power of':
      case '^':
        return exponent(arg1);
    }
  };
}

function random (start) {

}

function concat(){

}

var prependGreeting = null;

function add (op1) {
  return function(op2) {
    return op1 + op2;
  };
}

function subtract (op1) {
  return function(op2) {
    return op1 - op2;
  };
}

function multiply (op1) {
  return function(op2) {
    return op1 * op2;
  };
}

function divide (op1) {
  return function(op2) {
    return op1 / op2;
  };
}

function modulo (op1) {
  return function(op2) {
    return op1 % op2;
  };
}

function exponent (op1) {
  return function(op2) {
    return Math.pow(op1, op2);
  };
}

var add4and5 = null;

function calculator(){

}

var add5 = null;
var sub5 = null;
var multiply5 = null;
var divide5 = null;
var mod5 = null;
var pow3 = null;

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