/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */

const menorIndice = (array) => {
    let menor = 0;
    for (let index in array) {
        if (array[index] < menor) {
            menor = index;
        }
    }
    return menor;
}

console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));
