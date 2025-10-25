/**
 * Escreva uma função que recebe um número e retorne o seguinte:
 * Número é divisivel por 3 = Fizz
 * Número é divisivel por 5 = Buzz
 * Número é divisivel por 3 e 5 = FizzBuzz
 * Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
 * Checar se o Número é realmente um número = Retorna o que recebeu
 * Use a função com números de 0 a 100 = Looping de 0 a 100
 */


function fizzBuzz(num) {
    if (typeof(num) !== 'number')
        return num;

    if (num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz";
    } else if (num % 3 === 0){
        return "Fizz";
    } else if (num % 5 === 0){
        return "Buzz";
    } else {
        return num;
    }
}

// // Qual a melhor forma?
// console.log(typeof(30) === "number") <- Decidi Esse
// console.log(Number.isInteger(30))

console.log(fizzBuzz("Testando String"));

for (let i=0; i<=100; i++){
    console.log(fizzBuzz(i));
}