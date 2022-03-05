/* GHERKIN
FEATURE: Add numbers

SCENARIO: To add valid numbers given as input
GIVEN: Paramter list in example section
WHEN: add() is called
THEN: It should return a valid result as given in the example
EXAMPLES:
    | Input     | Expected output |
    | 10,20,30  | 60              |
    | hello     |  world          |
*/

/* GHERKIN
FEATURE: Subtract numbers

SCENARIO: To subtract valid numbers given as input
GIVEN: Paramter list in example section
WHEN: subtract() is called
THEN: It should return a valid result as given in the example
EXAMPLES:
    | Input     | Expected output |
    | 10,20     | -10             |
*/

import { MathOps } from "./math-ops";

describe('Working with MathOps', () => {
  describe('FEATURE: Add numbers', () => {
    describe('SCENARIO: To add valid numbers given as input', () => {
      describe('GIVEN: Paramter list in example section', () => {
        describe('When: Add() is called THEN: It should return a valid result as given in the example', () => {
          it('should add 10,20,30 to produce 60', () => {
            let actualResult = MathOps.add(10, 20, 40);
            let expectedResult = 70;

            expect(actualResult).toEqual(expectedResult);
          });
          it('should add hello, world to produce hello world', () => {
            let actualResult = MathOps.add('hello', ' world');
            let expectedResult = 'hello world';

            expect(actualResult).toEqual(expectedResult);
          });
          it('should add hello, world to produce hello world', () => {
            let actualResult = MathOps.add();
            let expectedResult = 'no input provided.';

            expect(actualResult).toEqual(expectedResult);
          });
        });
      });
    });
  });

  describe('FEATURE: Subtract numbers', () => {
    describe('SCENARIO: To subtract valid numbers given as input', () => {
      describe('GIVEN: Paramter list in example section', () => {
        describe('When: subtract() is called THEN: It should return a valid result as given in the example', () => {
          it('should subtract 10,20 to produce -10', () => {
            let actualResult = MathOps.subtract(10, 20);
            let expectedResult = -10;

            expect(actualResult).toEqual(expectedResult);
          });
        });
      });
    });
  });

  describe('FEATURE: Multiply numbers', () => {
    describe('SCENARIO: To multiply valid numbers given as input', () => {
      describe('GIVEN: Paramter list in example section', () => {
        describe('When: multiply() is called THEN: It should return a valid result as given in the example', () => {
          it('should multiply 10,20,30 to produce 6000', () => {
            let actualResult = MathOps.multiply(10, 20, 30);
            let expectedResult = 6000;

            expect(actualResult).toEqual(expectedResult);
          });
        });
      });
    });
  });

  describe('FEATURE: Divide numbers', () => {
    describe('SCENARIO: To divide valid numbers given as input', () => {
      describe('GIVEN: Paramter list in example section', () => {
        describe('When: divide() is called THEN: It should return a valid result as given in the example', () => {
          it('should divide 50,10 to produce 5', () => {
            let actualResult = MathOps.divide(50, 10);
            let expectedResult = 5;

            expect(actualResult).toEqual(expectedResult);
          });
          it('should divide 100 by 0 to produce Infinity', () => {
            let actualResult = MathOps.divide(100, 0);

            expect(actualResult).toEqual(Infinity);
          });
          it('should divide 100 by 0 to produce undefined', () => {
            let actualResult = MathOps.divide(100, 0);

            expect(actualResult).toBeUndefined;
          });
          it('should divide 0 by 0 and throw exception', () => {
            let actualResult = MathOps.divide(0, 0);

            expect(actualResult).toEqual(NaN);
          });
        });
      });
    });
  });

  describe('FEATURE: To test thrown error', () => {
    describe('SCENARIO: To check Divide by Zero exception', () => {
      describe('GIVEN: A function throwDivideByZeroException()', () => {
        describe('When: The function is called', () => {
          it('should throw Divide by zero exception', () => {

            expect(() => MathOps.throwDivideByZeroException()).toThrow();
            expect(() => MathOps.throwDivideByZeroException()).toThrowError('Divide by Zero');
            expect(() => MathOps.throwDivideByZeroException()).toThrowMatching((err) => err.message == 'Divide by Zero');
          });
        });
      });
    });
  });

});
