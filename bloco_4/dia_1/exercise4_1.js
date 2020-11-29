//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis,
// a e b , definidas no começo com os valores que serão operados. Faça programas para:
//Adição
//Subtração
//Multiplicação
//Divisão
//Módulo

const a = 10;
const b = 50;

const soma = a + b;
const sub = a - b;
const mult = a * b;
const subt = a / b;
const mod = a % b;

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
const maior = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } return num2;
}

console.log(maior(500, 1000));


//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
const maiorDeTres = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > 3) {
        return num2;
    } return num3;
}

console.log(maiorDeTres(52, 10, 50));

//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const positOuNegat = (number) => {
    if (number > 0) {
        return "Positivo";
    } else if (number < 0) {
        return "Negativo";
    } else {
        return 0;
    }
}
console.log(positOuNegat(15));

//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let a2 = 45;
let b2 = 90;
let c2 = 45;

let soma1 = (a2 + b2 + c2);

if (soma1 == 180) {
    console.log(true)
}
else if (soma1 != 180) {
    console.log(false)
}
else {
    console.log("erro ângulos invalidos")
}

/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals */

let pecaminuscula = "bISPO";
let peca = pecaminuscula.toLowerCase();

if (peca == "torre") {
    console.log("Movimento para frente");
}
else if (peca == "peao") {
    console.log("Um casa para frente");
}
else if (peca == "rainha") {
    console.log("Todos os movimentos execeto do cavalo");
}
else if (peca == "rei") {
    console.log("Todos os movimentos uma casa por vez execeto do cavalo ");
}
else if (peca == "bispo") {
    console.log("So anda na diagonal");
}
else if (peca == "cavalo") {
    console.log("movimentos em L");
}
else {
    console.log("Peça não existe");
}

/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let nota = 0;

if (nota >= 90 && nota <= 99) {
    console.log("A")
}
else if (nota >= 80 && nota <= 89) {
    console.log("B")
}
else if (nota >= 70 && nota <= 79) {
    console.log("C")
}
else if (nota >= 60 && nota <= 69) {
    console.log("D")
}
else if (nota >= 50 && nota <= 59) {
    console.log("E")
}
else if (nota < 50 && nota >= 1) {
    console.log("F")
}
else {
    console.log("erro")
}

/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if . */

let a1 = 7;
let b1 = 5;
let c1 = 15;

if (a1 % 2 == 0 || b1 % 2 == 0 || c1 % 2 == 0) {
    console.log(true)
}
else {
    console.log(false)
}

//Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
//Bonus: use somente um if .
let ab = 10;
let bc = 3;
let cd = 14;

if (ab % 2 !== 0 || bc % 2 !== 0 || cd % 2 !== 0) {
    console.log(true)
}
else {
    console.log(false)
}

/* Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

let custoProduto = 8;
let valorDeVenda = 15;
let Imposto = (custoProduto * 0.20);
let valorTotal = (custoProduto + Imposto);
let lucro = ((valorDeVenda - valorTotal) * 1000)

console.log(lucro);

if (custoProduto == 0 || valorDeVenda == 0) {
    console.log("Erro valores invalidos")
}

/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,00 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55. */

let salarioBruto = 6900;
let salarioLiquido = 0;
let descontoINSS = 0;
let descontoIR = 0;

//Calculo para desconto INSS
if (salarioBruto <= 1556.94) {
    descontoINSS = (salarioBruto * 0.08);
}
else if (salarioBruto > 1556.95 && salarioBruto < 2594.92) {
    descontoINSS = (salarioBruto * 0.09);
}
else if (salarioBruto > 2594.93 && salarioBruto < 5189.82) {
    descontoINSS = (salarioBruto * 0.11);
}
else if (salarioBruto > 5189.82) {
    descontoINSS = (570.88);
}

let salarioComDescontoINSS = (salarioBruto - descontoINSS);


//Calculo para desconto IR
if (salarioComDescontoINSS <= 1903.98) {
    descontoIR = (0);
}
else if (salarioComDescontoINSS >= 1903.99 && salarioComDescontoINSS <= 2826.65) {
    descontoIR = ((salarioComDescontoINSS * 0.075) - 142.80);
}
else if (salarioComDescontoINSS >= 2826.66 && salarioComDescontoINSS <= 3751.05) {
    descontoIR = ((salarioComDescontoINSS * 0.15) - 354.80);
}
else if (salarioComDescontoINSS >= 3751, 06 && salarioComDescontoINSS <= 4664.68) {
    descontoIR = ((salarioComDescontoINSS * 0.225) - 636.13);
}
else if (salarioComDescontoINSS > 4664.68) {
    descontoIR = ((salarioComDescontoINSS * 0.275) - 869.36);
}

console.log("Desconto IR R$" + descontoIR);
console.log("Desconto INSS R$" + descontoINSS);
salarioLiquido = (salarioComDescontoINSS - descontoIR)
console.log("Salário Liquido R$" + salarioLiquido);
