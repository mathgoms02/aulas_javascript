/*
Operadores de Comparação
>   maior que
>=  maior ou igual a
<   menor que
<=  menor ou igual que
==  igualdade (valor)
=== igualdade estrita (valor e tipo)
!=  diferente (valor)
!== diferente estrito (valor e tipo)
*/

// Vai retornar valor boleano
const comp = 10 > 5;
console.log(comp);

const comp1 = 10 >= 5;
console.log(comp1);

// Coersão de tipos
//const num1 = '10';    //number
//const num2 = 10;    //string
//const comp2 = num1 == num2; //vai retornar true
//console.log(comp2);

const num1 = '10';    //number
const num2 = 10;    //string
const comp2 = num1 === num2; //vai retornar false
console.log(comp2);

