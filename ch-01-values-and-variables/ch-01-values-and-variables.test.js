const add = require('./ch-01-values-and-variables');

test('1.2 typeof null is the string object', () => {
    expect(typeof null).toMatch('object');
});