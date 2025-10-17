// Atribuição via Destruturação (Arrays)

let a = 'A';
let b = 'B';
let c = 'C';

// INvertendo letras de forma mais facil
const letras = [b, c, a];
[a, b, c] = letras;

// Podemos declarar assim, de forma destruturada
const [d, e, f] = [1, 2, 3];

// Mesma coisa
const numeros = [1, 2, 3];
const [g, h, i] = numeros;


//________________________________________________________________________________________________________________________________________________


// Posso pegar apenas os primeiros, ou posso também ter uma variavel só para o resto
const numeros_1 = [123,345,456,567,678,789,890,998,876];
const [primeiroNumero, segundoNumero, ...resto] = numeros_1;

console.log(primeiroNumero, segundoNumero);
console.log(resto)

// Operador (...) rest, spread

//________________________________________________________________________________________________________________________________________________

// Posso pegar apenas os primeiros, ou posso também ter uma variavel só para o resto
const numeros_2 = [123,345,456,567,678,789,890,998,876];
const [um, dois, , quatro, , ,sete] = numeros_2;

console.log(um, seis);

//________________________________________________________________________________________________________________________________________________

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// console.log(matrix[1][2]);

// Fazendo via desestruturação
const [,[,,seis]] = matrix;
// ou
const [lista1, lista2, lista3] = matrix;
console.log(lista3[2]);
