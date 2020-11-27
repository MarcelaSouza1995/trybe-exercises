let pecaminuscula = "bISPO";
let peca = pecaminuscula.toLowerCase();

if(peca=="torre"){
    console.log("Movimento para frente");
}
else if(peca=="peao"){
    console.log("Um casa para frente");
}
else if(peca=="rainha"){
    console.log("Todos os movimentos execeto do cavalo");
}
else if(peca=="rei"){
    console.log("Todos os movimentos uma casa por vez execeto do cavalo ");
}
else if(peca=="bispo"){
    console.log("So anda na diagonal");
}
else if(peca=="cavalo"){
    console.log("movimentos em L");
}
else{
    console.log("Peça não existe");
}