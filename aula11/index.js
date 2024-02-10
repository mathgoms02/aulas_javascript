/**
 * Operadores Aritiméticos
 * + adição e concatenação
 * -
 * /
 * *
 * 
 * 
 *  (%) - retorna o resto da divisão
 * (**) - Pontenciação
 */

const num1 = 10;
const num2 = 5;
console.log(num1 % num2);

const num3 = 2;
console.log(num1 ** num3);

let contador = 1;
console.log(contador++); // printa, depois adiciona
console.log(contador);
console.log(++contador); //adiciona, depois printa
console.log('\n')
let contador1 = 0;
const passo = 2;
contador1 += passo; // pular de dois em dois
console.log(contador1);
contador1 += passo; // pular de dois em dois
console.log(contador1);
contador1 += passo; // pular de dois em dois
console.log(contador1);
contador1 += passo; // pular de dois em dois
console.log(contador1);
contador1 += passo; // pular de dois em dois
console.log(contador1);

// convertendo
const num4 = parseInt('5'); //converti o 5 em numérico int
const num5 = parseFloat('5.2'); //converti o 5 em numérico float
const num6 = Number('5.2'); //converti o 5 em numérico