//Tipos de dados primitivos

//STRING
const nome = 'Matheus';
const nome1 = "Matheus";
const nome2 = `Matheus`;

//NUMBER
const num1 = 10;
const num2 = 10.52;

//UNDEFINED
let indefinido; //náo aponta pra lugar nenhum da memória

//NULL
let sobrenome = null; //valor Nulo, também não aponta pra lugar nenhum na memória

//BOOLEANO
const aprovado = true; //true or false (lógico)


console.log(typeof(nome));
console.log(typeof(num1));
console.log(typeof(indefinido));
console.log(typeof(sobrenome),'# Não se encaixa em objeto, é um bug??');
console.log(typeof(aprovado));

// const a = [1, 2];
// const b = a;

// console.log(a, b);

// b.push(3);
// console.log(a, b);