exibirasteristicos(5);

function exibirasteristicos(n) {
  let padrao = "";
  for (let linha = 1; linha <= n; linha++) {
    padrao += "*";
    console.log(padrao);
  }
}
