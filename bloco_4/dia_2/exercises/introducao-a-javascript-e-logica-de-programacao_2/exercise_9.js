//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [];
let divisao = [];


for(let index = 1; index < 26; index ++){
    numbers.push(index);
}

for ( let contador in numbers){
    divisao.push(numbers[contador] / 2);
}

console.log(divisao)