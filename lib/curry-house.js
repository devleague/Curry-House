var curry = require('./curry');

function calculate (arg) {
  return function (op){
    if (op === '+' || op === 'add') {
      return function (arg2) {
         return arg + arg2; 
      };
    }
    if (op === '-' || op === 'subtract') {
      return function (arg2) {
        return arg - arg2;
      };
    }
    if (op === '*' || op === 'multiply') {
      return function (arg2) {
        return arg * arg2;
      };
    }
    if (op === '/' || op === 'divide') {
      return function (arg2) {
        return arg / arg2;
      };
    }
    if (op === '%' || op === 'modulo') {
      return function (arg2) {
        return arg % arg2;
      };
    }
    if (op === '^' || op === 'power of') {
      return function (arg2) {
        return Math.pow(arg,arg2);
      };
    }
  };
  
}

function random (start) {
  return {
    to: function (end) {
      return Math.floor(Math.random() * (start - end) + end);
    },
    toInculde: function (end) {
      return Math.floor(Math.random() * (start - end) + end + 1);
    }
  }; 

}

function concat(prefix, suffix){
  return prefix + suffix;
}

var prependGreeting = curry(concat, 'Hello ');

function add (first,middle,last) {
  return first + middle + last;
}

var add4and5 = curry(add, 4, 5);

function calculator(operation){
  if (operation === '+' || operation === 'add') {
      return function (op1, op2) {
         return op1 + op2; 
      };
    }
    if (operation === '-' || operation === 'subtract') {
      return function (op1, op2) {
        return op2 - op1;
      };
    }
    if (operation === '*' || operation === 'multiply') {
      return function (op1, op2) {
        return op1 * op2;
      };
    }
    if (operation === '/' || operation === 'divide') {
      return function (op1, op2) {
        return op2 / op1;
      };
    }
    if (operation === '%' || operation === 'modulo') {
      return function (op1, op2) {
        return op2 % op1;
      };
    }
    if (operation === '^' || operation === 'power of') {
      return function (op1, op2) {
        return Math.pow(op2,op1);
      };
  }
}

var add5 = curry(calculator('+'),5);
var sub5 = curry(calculator('-'),5);
var multiply5 = curry(calculator('*'),5);
var divide5 = curry(calculator('/'),5);
var mod5 = curry(calculator('%'),5);
var pow3 = curry(calculator('^'),3);

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