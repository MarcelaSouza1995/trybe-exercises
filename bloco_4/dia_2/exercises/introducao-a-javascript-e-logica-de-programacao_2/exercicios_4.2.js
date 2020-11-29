//1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
//2 Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
//3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//4 Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: 
//"valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
//5 Utilizando for , descubra qual o maior valor contido no array e imprima-o;
//6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
//7 Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// 8 Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
// 9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

const numbers = [5, 5, 5, 10, 50];

let soma = 0;


for (let index = 0; index < numbers.length; index += 1) {
    var numeros = numbers[index];
    soma += numeros;
    console.log(numeros); //exercicio 1

}
console.log(`Soma de todos os valores de numbers: ${soma}!`);//exercicio 2

const media = soma / numbers.length;
console.log(`Média dos valores de numbers:${media}!`); //exercicio 3

if (media < 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');//exercicio 4
}


const arrNumeros = [3, 4, 5, 6, 9, 11, 13, 15];
let impar = 0;
for (let i = 0; i < arrNumeros.length; i += 1) {
    if (arrNumeros[i] % 2 !== 0) {
        impar += 1;
    }
}

let maiorNumero = Math.max(...arrNumeros);
console.log(`O maior número de numbers é ${maiorNumero}!`);//exercicio 5

console.log(`A quantidade de números impares em arrNumeros é ${impar}!`);//exercicio 6

let menorNumero = Math.min(...arrNumeros);
console.log(`O menor número de arrNumero1 é ${menorNumero}!`); //exercicio 7

const newArr = [];
for (index = 0; index < 26; index += 1) {
    newArr.push(index);
}
console.log(newArr); //exercicio 8

for (let index1 = 0; index1 < newArr.length; index1 += 1) {
    console.log(newArr[index1] / 2); //exercicio 9
}
