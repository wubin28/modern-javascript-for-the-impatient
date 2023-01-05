function returnUndefined() {
    let unknown; // You should never set values to undefined and never return undefined from a function.
    return unknown;
}

function returnNull() {
    let unknown = null; // You should always use null for missing values.
    return unknown;
}

function greetingWithTemplateLiterals(firstName, lastName) {
    return `Hello, ${firstName.length > 0 ? `${firstName[0]}. ` : '' }${lastName}`;
}

module.exports = {
    returnUndefined,
    returnNull,
    greetingWithTemplateLiterals,
}
