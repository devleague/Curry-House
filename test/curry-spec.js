var chai = require('chai');
chai.should();

var curryHouse = require('../lib/curry-house');
console.log(curryHouse);

describe('Curry House', function() {

  describe('calculate', function() {
    var calculate = curryHouse.calculate;

    it('should add', function() {
      calculate(4)('+')(5).should.equal(9);
      calculate(4)('add')(5).should.equal(9);
    });

    it('should subtract', function() {
      calculate(4)('-')(5).should.equal(-1);
      calculate(4)('subtract')(5).should.equal(-1);
    });

    it('should multiply', function() {
      calculate(4)('*')(5).should.equal(20);
      calculate(4)('multiply')(5).should.equal(20);
    });

    it('should divide', function() {
      calculate(20)('/')(5).should.equal(4);
      calculate(20)('divide')(5).should.equal(4);
    });

    it('should get the remainder', function() {
      calculate(19)('%')(5).should.equal(4);
      calculate(19)('modulo')(5).should.equal(4);
    });

    it('should raise exponentially', function() {
      calculate(4)('^')(3).should.equal(64);
      calculate(4)('power of')(3).should.equal(64);
    });

  });

  describe('random', function() {
    var random = curryHouse.random;

    describe('to', function() {

      it('should generate random numbers from start to end (exclusive)', function() {
        var to50 = random(50);
        for (var i = 0; i < 100; i++) {
          to50.to(60).should.be.within(50,59);
        }
      });

    });

    describe('toIncluding', function() {

      it('should generate random numbers from start to end (inclusive)', function() {
        var to50 = random(50);
        for (var i = 0; i < 100; i++) {
          to50.toInclude(60).should.be.within(50,60);
        }
      });

    });

  });

  describe('prependGreeting', function() {
    var prependGreeting = curryHouse.prependGreeting;

    it('should be a curried concat function', function() {
      prependGreeting('Jason').should.equal('Hello Jason');
      prependGreeting('Jon').should.equal('Hello Jon');
    });

  });

  describe('add4and5', function() {
    var add4and5 = curryHouse.add4and5;

    it('should be a curried add function', function() {
      add4and5(6).should.equal(15);
      add4and5(16).should.equal(25);
    });

  });

  describe('calculator', function() {
    describe('returns a calculating function that operates the second argument onto the first', function() {

      describe('add', function() {
        it('should add', function() {
          curryHouse.calculator('add')(4,5).should.equal(9);
          curryHouse.calculator('+')(4,5).should.equal(9);
        });
      });

      describe('subtract', function() {
        it('should subtract', function() {
          curryHouse.calculator('subtract')(4,5).should.equal(1);
          curryHouse.calculator('-')(4,5).should.equal(1);
        });
      });

      describe('multiply', function() {
        it('should multiply', function() {
          curryHouse.calculator('multiply')(4,5).should.equal(20);
          curryHouse.calculator('*')(4,5).should.equal(20);
        });
      });

      describe('divide', function() {
        it('should divide', function() {
          curryHouse.calculator('divide')(4,5).should.equal(1.25);
          curryHouse.calculator('/')(4,5).should.equal(1.25);
        });
      });

      describe('modulo', function() {
        it('should get the remainder', function() {
          curryHouse.calculator('modulo')(4,5).should.equal(1);
          curryHouse.calculator('%')(4,5).should.equal(1);
        });
      });

      describe('power of', function() {
        it('should raise exponentially', function() {
          curryHouse.calculator('power of')(3,4).should.equal(64);
          curryHouse.calculator('^')(3,4).should.equal(64);
        });
      });

    });

    describe('curried calculator functions', function() {

      describe('add5', function() {
        it('should add 5', function() {
          curryHouse.add5(4).should.equal(9);
        });
      });

      describe('sub5', function() {
        it('should subtract 5', function() {
          curryHouse.sub5(4).should.equal(-1);
        });
      });

      describe('multyply5', function() {
        it('should multiply by 5', function() {
          curryHouse.multiply5(4).should.equal(20);
        });
      });

      describe('divide5', function() {
        it('should divide by 5', function() {
          curryHouse.divide5(20).should.equal(4);
        });
      });

      describe('mod5', function() {
        it('should get the remainder of dividing by 5', function() {
          curryHouse.mod5(99).should.equal(4);
        });
      });

      describe('pow3', function() {
        it('should cube a number', function() {
          curryHouse.pow3(4).should.equal(64);
        });
      });

    });

  });

});
