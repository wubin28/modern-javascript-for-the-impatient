const add = require('./ch-01-values-and-variables');

describe('Chapter 1. Values And Variables', () => {
    it('1.2 typeof null is the string object', () => {
        expect(typeof null).toMatch('object');
    });

    it('1.4 variables do not have a type', () => {
        let counter = 0;
        counter = 'zero';
        expect(counter).toMatch('zero');
    });

    it('1.4 if you do not initialize a variable, it has the special value undefined', () => {
        let x;
        expect(x).toBeUndefined();
    });

    it('1.4 if you try to modify the value contained in a const, a run-time error occurs', () => {
        const badFunction = () => {
            const PI = 3.14;
            PI = 3.1416;
        }

        expect(badFunction).toThrow();
    });

    it('1.4 avoid two obsolete forms of variable declarations, with the var keyword and with no keyword at all (misspelling creates a new variable)', () => {
        var counter = 0; // Obsolete
        coutner = 1; // Note the misspelling - creates a new variable
        expect(counter).toBe(0);
        expect(coutner).toBe(1);
    });

    it('1.6 JavaScript has no explicit integer type. All numbers are double-precision floating-point numbers.', () => {
        const aFloat = parseFloat('3.0');
        const anInt = parseInt('3');
        expect(aFloat).toBe(anInt);
        expect(typeof aFloat).toMatch('number');
        expect(typeof anInt).toMatch('number');
    });

    it('1.6 the toString method converts a number back to a string', () => {
        expect((3.0).toString()).toMatch('3');
    });
});
