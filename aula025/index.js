const numero = 10;

if (numero >= 0 && numero <=5) {
    console.log('Número entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log("Numero entre 5 e 8");
} else if (1 === 1){    // Verdadeira   -> Vai executar esse por ser o primeiro
    console.log('LITERAL');
} else if (numero >= 9 && numero <= 11){    // Verdadeira
    console.log('O numero esta entre 9 e 11');
} else {
    console.log('O número não esta entre 0 e 11.');
}
