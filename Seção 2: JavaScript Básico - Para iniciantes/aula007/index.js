// variavel que não muda, utilizando const
// O LET eu posso mudar a variável

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;

const resultadoDuplicado = resultado*2;

console.log('Resultado:', resultado);
console.log('Resultado Duplicado:', resultadoDuplicado);
console.log('Concatenando: ',nome + primeiroNumero + segundoNumero); // concatenando
console.log('Somando:', primeiroNumero + segundoNumero); // concatenando



let resultadoTriplicado = resultado*3;
resultadoTriplicado = resultadoTriplicado+5;
console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero));
console.log(typeof(nome));