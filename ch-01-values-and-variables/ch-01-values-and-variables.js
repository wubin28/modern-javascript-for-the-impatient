function returnUndefined() {
    let unknown; // You should never set values to undefined and never return undefined from a function.
    return unknown;
}

function returnNull() {
    let unknown = null; // You should always use null for missing values.
    return unknown;
}

module.exports = {
    returnUndefined,
    returnNull,
}
