const functions = require('./ch-01-values-and-variables');

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

    it('1.7: Prefer template literals over string concatenation. This way, you don’t have to remember what the + operator does to non-numeric operands.', () => {
        expect('I\'m ' + 52 + '.').toMatch('I\'m 52.');
        const age = 52;
        expect(`I'm ${age}.`).toMatch('I\'m 52.');
    });

    it('1.9: You should never set values to undefined and never return undefined from a function, but always use null for missing values.', () => {
        expect(functions.returnUndefined()).toBeUndefined();
        expect(functions.returnNull()).toBeNull();
    });

    it('1.10: Some characters require a single 16-bit code unit, and others require two.', () => {
        expect('Hello \n'.length).toBe(7); // The newline character requires a single 16-bit code unit
        expect('Hello 😂'.length).toBe(8); // The face with tears of joy emoji requires two 16-bit code units
    });

    it('1.11: Template literals are strings that can contain expressions and span multiple lines. These strings are delimited by backticks (`. . .`).', () => {
        let destination = 'world' // A regular string
        let greeting = `Hello, ${destination.toUpperCase()}!` // A template literal
        expect(greeting).toMatch('Hello, WORLD!');
    });

    it('1.11: You can nest template literals inside the ${. . .} expressions.', () => {
        expect(functions.greetingWithTemplateLiterals('Ben', 'WU')).toMatch('Hello, B. WU');
        expect(functions.greetingWithTemplateLiterals('', 'WU')).toMatch('Hello, WU');
    });

    it('1.11: Any newlines inside the template literal are included in the string.', () => {
        let destination = 'Beijing';
        let greeting = `<div>Hello</div>
<div>${destination}</div>`;
        expect(greeting).toMatch('<div>Hello</div>\n<div>Beijing</div>')
    });

    it('1.11: To include backticks, dollar signs, or backslashes in template literals, escape them with backslashes.', () => {
        expect(`\`\$\\`).toMatch('`$\\');
    });

    it('1.12: A JavaScript object is simply a set of name/value pairs or “properties”. Such an object has only public data and neither encapsulation nor behavior. The object is not an instance of any particular class. In other words, it is nothing like an object in traditional object-oriented programming.', () => {
        const ben = {
            name: 'Ben WU',
            age: 52,
        }
        let bensAge = ben.age;
        ben.age = 53;
        ben.location = 'Beijing';

        expect(ben.age).toBe(53);
        expect(ben.location).toMatch('Beijing');
    });

    it('1.12: const is like final in Java and not at all like const in C++.', () => {
        const badFunction = () => {
            const ben = {
                name: 'Ben WU',
                age: 52,
            };
            ben = {
                name: 'Alex WU',
                age: 17,
            };
        }
        expect(badFunction).toThrow();
    });

    it('1.12: Use the delete operator to remove a property. Accessing a nonexistent property yields undefined.', () => {
        const ben = {
            name: 'Ben WU',
            age: 52,
        };
        delete ben.age;
        let bensAge = ben.age;
        expect(ben.age).toBeUndefined();
    });

    it('1.12: A property name can be computed. Then, use array brackets to access the property value.', () => {
        const ben = {
            name: 'Ben WU',
            age: 52,
        };
        let field = 'Age';
        let bensAge = ben[field.toLowerCase()];
        expect(ben.age).toBe(52);
    });
});
