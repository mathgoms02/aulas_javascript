// CONTINUE
const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros){
    // Vai pular o número 2 e o 5
    if (numero === 2 || numero === 5){
        continue;
    }
    console.log(numero);
}

console.log("#########")
//________________________________________________________________________________________________________________________
// BREAK

for (let numero of numeros){
    // Procurando o 7, quando achar, ele vai sair do bloco.
    if (numero === 7){
        console.log("7 encontrado, saindo...");
        break;
    }
    console.log(numero);
}