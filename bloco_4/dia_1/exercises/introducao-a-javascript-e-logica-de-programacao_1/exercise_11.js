let salarioBruto = 3000;
let salarioLiquido = undefined;
let descontoINSS = undefined;
let descontoIR = undefined;

//Calculo para desconto INSS
if (salarioBruto <= 1556.94){
    descontoINSS = (salarioBruto * 0.08);
}
else if (salarioBruto > 1556.95 && salarioBruto < 2594.92){
    descontoINSS = (salarioBruto * 0.09);
}
else if (salarioBruto > 2594.93 && salarioBruto < 5189.82){
    descontoINSS = (salarioBruto * 0.11);
}
else if (salarioBruto > 5189.82){
    descontoINSS = (570.88);
}

let salarioComDescontoINSS = (salarioBruto - descontoINSS);


//Calculo para desconto IR
if (salarioComDescontoINSS <= 1903.98){
    descontoIR = (0);
}
else if (salarioComDescontoINSS >= 1903.99 && salarioComDescontoINSS <= 2826.65){
    descontoIR = ((salarioComDescontoINSS * 0.075) - 142.80);
}
else if (salarioComDescontoINSS >= 2826.66 && salarioComDescontoINSS <=3751.05){
    descontoIR = ((salarioComDescontoINSS * 0.15) - 354.80);
}
else if (salarioComDescontoINSS >= 3751,06 && salarioComDescontoINSS<= 4664.68){
    descontoIR = ((salarioComDescontoINSS * 0.225) - 636.13);
}
else if (salarioComDescontoINSS > 4664.68){
    descontoIR = ((salarioComDescontoINSS * 0.275) - 869.36);
}

console.log("Desconto IR R$" + descontoIR);
console.log("Desconto INSS R$" + descontoINSS);
salarioLiquido = (salarioComDescontoINSS - descontoIR)
console.log("Salário Liquido R$" + salarioLiquido);
