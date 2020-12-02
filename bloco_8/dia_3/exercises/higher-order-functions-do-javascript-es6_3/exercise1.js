
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

//1.Dada uma matriz de matrizes, transforme em uma única matriz.

function flatten() {
    return arrays.reduce((contador, elemento) => contador.concat(elemento), []);
}
console.log(flatten(arrays));

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);