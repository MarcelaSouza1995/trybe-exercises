//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function isPalindromo(palavra) {
  x = palavra.split("").reverse().join("");
  return x == palavra ? true : false;
}
console.log(isPalindromo('marcela'));