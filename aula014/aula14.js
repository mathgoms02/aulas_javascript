// Apenas explicando que colocando a barra invertida, podemos utilizar as aspas
let umaString = 'It\'s time';

console.log(umaString);


// String são indexaveis, cada caracter tem um índice, por exemplo, um texto = 01234567, sendo cada caracter um número
let outraString = 'Um texto';

console.log(outraString[4]); // Printou o caracter na posição 4

console.log(outraString.charAt(4)) // mesma coisa


// Concatenando strings
let nome = 'Matheus';
let sobrenome = 'Gomes'

console.log(nome.concat(' ',sobrenome));
