// Apenas explicando que colocando a barra invertida, podemos utilizar as aspas
let umaString = 'It\'s time';

console.log(umaString);


// String são indexaveis, cada caracter tem um índice, por exemplo, um texto = 01234567, sendo cada caracter um número
let outraString = 'Um texto';

console.log(outraString[4]);        // Printou o caracter na posição 4
console.log(outraString.charAt(4))  // mesma coisa


// Concatenando strings
let nome = 'Matheus';
let sobrenome = 'Gomes'

console.log(nome.concat(' ',sobrenome));
console.log(`${umaString} em um lindo dia`);

// verificando indexaçãp
console.log(umaString.indexOf('time'));
console.log(umaString.indexOf('t'));
console.log(umaString.lastIndexOf('t', 3)); // pega de trás pra frente, a partir do index 3

// expressão regular
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/g)); // pedindo para encontrar o x

console.log(umaString.replace("time", "show"));
console.log(umaString.replace(/t/g, "#")); // replace utilizando expressão regular, substituindo todos os t

console.log(umaString.length); // tamanho da string
console.log(umaString.slice(2, 6)); // parte a string
console.log(umaString.slice(-2)); // parte a string utilizando index negativo



