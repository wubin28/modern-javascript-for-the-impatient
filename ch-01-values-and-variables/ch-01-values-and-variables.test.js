const add = require('./ch-01-values-and-variables');

describe("Chapter 1. Values And Variables", () => {
    test('1.2 typeof null is the string object', () => {
        expect(typeof null).toMatch('object');
    });
});
