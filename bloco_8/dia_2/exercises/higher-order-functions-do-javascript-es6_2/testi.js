const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 50, 3, 9];
const novosNumeros = [];
numeros.forEach((num) => novosNumeros.push(num * num));

const comparar = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}
novosNumeros.sort(comparar);
console.log(novosNumeros);