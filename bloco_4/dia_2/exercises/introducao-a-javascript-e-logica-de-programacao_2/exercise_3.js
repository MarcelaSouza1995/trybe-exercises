let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let comprimento = numbers.length


for(let index = 0; index < numbers.length; index++){
   soma += numbers[index];
}

let media = (soma / comprimento);

console.log(media);