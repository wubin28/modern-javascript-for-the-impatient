const add = require('./ch-01-values-and-variables');

describe('Chapter 1: Values And Variables', () => {
    it('1.2: typeof null is the string object', () => {
        expect(typeof null).toMatch('object');
    });

    it('1.4: variables do not have a type', () => {
        let counter = 0;
        counter = 'zero';
        expect(counter).toMatch('zero');
    });

    it('1.4: if you do not initialize a variable, it has the special value undefined', () => {
        let x;
        expect(x).toBeUndefined();
    });

    it('1.4: if you try to modify the value contained in a const, a run-time error occurs', () => {
        const badFunction = () => {
            const PI = 3.14;
            PI = 3.1416;
        }

        expect(badFunction).toThrow();
    });

    it('1.4: avoid two obsolete forms of variable declarations, with the var keyword and with no keyword at all (misspelling creates a new variable)', () => {
        var counter = 0; // Obsolete
        coutner = 1; // Note the misspelling - creates a new variable
        expect(counter).toBe(0);
        expect(coutner).toBe(1);
    });

    it('1.6: JavaScript has no explicit integer type. All numbers are double-precision floating-point numbers.', () => {
        const aFloat = parseFloat('3.0');
        const anInt = parseInt('3');
        expect(aFloat).toBe(anInt);
        expect(typeof aFloat).toMatch('number');
        expect(typeof anInt).toMatch('number');
    });

    it('1.6: the toString method converts a number back to a string', () => {
        expect((3.0).toString()).toMatch('3');
    });

    it('1.6: if you divide by zero, the result is Infinity or -Infinity', () => {
        expect((3 / 0).toString()).toMatch('Infinity');
        expect((-3 / 0).toString()).toMatch('-Infinity');
    });

    it('1.6: 0/0 is NaN, the "not a number" constant', () => {
        expect(0/0).toBeNaN();
    });

    it('1.6: some number-producing functions return NaN to indicate a faulty input', () => {
        expect(parseFloat('pie')).toBeNaN();
    });

    it('1.7: the / operator always yields a floating-point result, even if both operands are integers. e.g. 1/2 is 0.5, not 0 as it would be in Java or C++.', () => {
        expect(1 / 2).toBe(0.5);
    });

    it('1.7: if k and n are positive values, possibly fractional, then k % n is the value that is obtained by subtracting n from k until the result is less than n', () => {
        expect(3.5 % 1.2).toBe(1.1);
    });

    it('1.7: If an operand of any arithmetic operator is the “not a number” value NaN, the result is again NaN.', () => {
        expect(1 + parseFloat('pie')).toBeNaN();
    });
});
