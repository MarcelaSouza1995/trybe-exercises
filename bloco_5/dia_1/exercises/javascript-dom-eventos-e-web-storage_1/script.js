/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como 
 você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function mudaTexto() {
  document.getElementById("paragrafo").innerHTML =
    "Daqui a dois anos me vejo uma desenvolveroda de sucesso!";
}
mudaTexto();

function mudaCorQuadrado() {
  let quadro = document.getElementsByClassName("main-content")[0];
  quadro.style.backgroundColor = "#008000";
}
mudaCorQuadrado();

function mudaCorQuadrado2() {
  let quadro2 = document.getElementById("paragrafos");
  quadro2.style.backgroundColor = "white";
}
mudaCorQuadrado2();

function corrigirTexto() {
  let texto = document.getElementsByTagName("h1")[0];
  texto.innerHTML = "Exercício 5.1 - Java Script";
}
corrigirTexto();

function textoMaiusculo() {
  let paragrafos = document.getElementById("paragrafos");
  paragrafos.toUpperCase();
}
textoMaiusculo();

function exibirConteudo() {
  let conteudo = document.getElementById("paragrafos");
  console.log(conteudo);
}
exibirConteudo();
