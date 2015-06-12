# Curry House

Currying functions in Javascript

[Slides](https://slides.com/theremix/currying)

### Goal

Demonstrate ability to curry functions

### Install Dependencies

```
npm install
```

### Run tests

```
mocha -w --bail
```

## Functions

Do all work in `lib/curry-house.js`  
Resist the urge to open `test/curry-spec.js` until the end.

### calculate

expected result

```
var add4and5 = calculate(4)('+')(5); // 9
```

`calculate` should take in a single argument

`calculate` should return a function that accepts a single argument, and returns a function based on that argument.

- if that argument is `'+'` or `'add'`, return a function that takes a single argument that returns the sum of the argument for `calculate` and the argument for last function to be returned
- if that argument is `'-'` or `'subtract'`, return a function that takes a single argument that returns the difference of the argument for `calculate` and the argument for last function to be returned
- if that argument is `'*'` or `'multiply'`, return a function that takes a single argument that returns the product of the argument for `calculate` and the argument for last function to be returned
- if that argument is `'/'` or `'divide'`, return a function that takes a single argument that returns the quotient of the argument for `calculate` and the argument for last function to be returned
- if that argument is `'%'` or `'modulo'`, return a function that takes a single argument that returns the remainder of dividing the argument for `calculate` and the argument for last function to be returned
- if that argument is `'^'` or `'power of'`, return a function that takes a single argument that returns the exponentiation of the argument for `calculate` to the power of the argument for last function to be returned

### random

expected result

```
var randomNumberFrom20to25 = random(20).to(25);
// 20,21,22,23 or 24

var randomNumberFrom20 = random(20);
var randomNumberFrom20to25inc = randomNumberFrom20.toInclude(25);
// 20,21,22,23,24 or 25
```

`random` should take a single argument `start`

`random` should return an object with two keys, `to` and `toInclude`

the value of `to` is a function that takes a single argument `end`, and returns a whole random number between `start` and `end` (exclusive)

the value of `toInclude` is a function that takes a single argument `end`, and returns a whole random number between `start` and `end` (inclusive)

### concat

`concat` is a function that accepts two arguments, and returns the two arguments as a concatenated string

### prependGreeting

`prependGreeting` is a variable with the value set to the function returned by currying (using the curry helper) the `concat` function, with a hard-coded first argument `'Hello '`

expected result

```
var greeting = prependGreeting('Json'); // 'Hello Json'
```

### add

`add` should take 3 arguments and return the sum of all arguments

### add4and5

`add4and5` is a variable with it's value set to the function returned by currying (using the curry helper) the `add` function, with two a hard-coded arguments `4` and `5`

expected result

```
var sumWith4and5 = add4and5(6); // 15
```

## calculator

`calculator` should take in a single argument `operation`

`calculator` should return a function that accepts two arguments `op2` and `op1`, and returns a result based on the two arguments.

- if `operation` is `'+'` or `'add'`, return a function that returns the sum of `op1` added by `op2`
- if `operation` is `'-'` or `'subtract'`, return a function that returns the difference of `op1` subtracted by `op2`
- if `operation` is `'*'` or `'multiply'`, return a function that returns the prouduct of `op1` multiplied by `op2`
- if `operation` is `'/'` or `'divide'`, return a function that returns the quotient of `op1` divided by `op2`
- if `operation` is `'%'` or `'modulo'`, return a function that returns the remainder of `op1` divided by `op2`
- if `operation` is `'^'` or `'power of'`, return a function that returns the exponentiation of `op1` to the power of `op2`


## add5

`add5` is a variable with a value set to the function returned by currying the function returned by invoking `calculator` with an argument `'+'`, and binding the curried functions first argument to 5

expected result

```
add5(4); // 9
```

## sub5

`sub5` is a variable with a value set to the function returned by currying the function returned by invoking `calculator` with an argument `'-'`, and binding the curried functions first argument to 5

expected result

```
sub5(4); // -1
```

## multiply5

`multiply5` is a variable with a value set to the function returned by currying the function returned by invoking `calculator` with an argument `'*'`, and binding the curried functions first argument to 5

expected result

```
multiply5(4); // 20
```

## divide5

`divide5` is a variable with a value set to the function returned by currying the function returned by invoking `calculator` with an argument `'/'`, and binding the curried functions first argument to 5

expected result

```
divide5(20); // 4
```

## mod5

`mod5` is a variable with a value set to the function returned by currying the function returned by invoking `calculator` with an argument `'%'`, and binding the curried functions first argument to 5

expected result

```
mod5(99); // 4
```
_"99 divided by 5 has remainder 4"_

## pow3

`pow3` is a variable with a value set to the function returned by currying the function returned by invoking `calculator` with an argument `'^'`, and binding the curried functions first argument to 5

expected result

```
pow3(4); // 64
```
_"4 to the power of 3"_


## Using Lo-Dash

_stretch goal, commit to new branch named lo-dash_

Replace the curry helper with lo-dash's `partial` function.