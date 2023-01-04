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
});
