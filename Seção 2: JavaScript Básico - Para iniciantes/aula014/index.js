let num1 = 1500;   //number
let num2 = 2.5; //number


// mudando para binário
console.log(num1.toString(2));   


// Convertendo numero para string 
console.log(num1 + num2);
console.log(typeof(num1.toString()));
console.log(num1 + num2);


// Ajustando casas decimais
let num3 = 65.6595165432164654
console.log(num3.toFixed(2));   //ajustar casas decimais


// Verificar tipo de dado?
console.log(Number.isInteger(num1));


// Tratando NaN
let temp = num1 * 'Olá';
console.log(Number.isNaN(temp));


// IEEE 754-2008
let num4 = 0.7;
let num5 = 0.1;

num4 += num5;   //0.8
num4 += num5;   //0.9
num4 += num5;   //1.0
num4 += num5;   //1.1
num4 += num5;   //1.2
num4 += num5;   //1.3
num4 += num5;   //1.4
num4 += num5;   //1.5
num4 += num5;   //1.6
num4 += num5;   //1.7
num4 += num5;   //1.8
num4 += num5;   //1.9
num4 += num5;   //2.0
console.log(num4);

// Utilizando o toFixed() não é a melhor opção por não retornar o tipo certo, então adicionamos um parseFloat()
num4 = parseFloat(num4.toFixed(2));
console.log(num4);