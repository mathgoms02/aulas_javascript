// VALORES PRIMITIVOS E VALORES POR REFERÊNCIA
/*
VALORES PRIMITIVOS - Valores copiados
- String
- Number
- Boolen
- Undefined
- NUll (bigint, symbol)

Referência (mutável) - passados por referência
- Array
- object
- function
*/


// // copiando, ele sempre vai apontar pro lugar na memória, então independente, se eu mudar o 'b', ele vai mudar 'a' e vice versa
// let a = [1,2,3];
// let b = a;
// console.log(a,b);

// a.push(4);
// console.log(a,b);
// b.pop();
// console.log(a,b);

//______________________________________________________________________________________________________________

// // mas da pra deixar ele de modo independente
// let a = [1,2,3];
// let b = [...a]; // valor independente
// let c = b;
// console.log(a,b);

// a.push(4);
// console.log(a,b);
// b.pop();
// console.log(a,b);

//______________________________________________________________________________________________________________

const a = {
    nome: 'Matheus',
    sobrenome: 'Gomes'
};
const b = {...a};

a.nome = 'Manoel';
console.log(a);
console.log(b);