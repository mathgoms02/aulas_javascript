// // For - estrutura de repetição (ooomagá)

// /*
// Para criar o for, precisamos de:
// - Criar uma variavel dentro dos parenteses com valor inicial
// - Criar condição para parar o laço de repetição
// - Adicionar se vai incrementar ou decrementar variavel de controle
// */
// for (let i = 0; i <= 5; i++) {
//     console.log(`Linha ${i}`);
// }

// // console.log('Linha 0');
// // console.log('Linha 1');
// // console.log('Linha 2');
// // console.log('Linha 3');
// // console.log('Linha 4');
// // console.log('Linha 5');

// // Podemos brincar com o for, como aqui, ele vai do 400 até o 500
// for (let i = 400; i <= 500; i++) {
//     console.log(`Linha ${i}`);
// }

// // Aqui ele vai pular de 2 em 2
// for (let i = 0; i <= 10; i += 2) {
//     console.log(`Linha ${i}`);
// }

// // Podemos começar de números negativos
// for (let i = -10; i <= 10; i += 2) {
//     console.log(`Linha ${i}`);
// }

// // Podemos inverter as ordens também, decrementando
// for (let i = 500; i >= 400; i -= 2) {
//     console.log(`Linha ${i}`);
// }

// // Adicionar outras lógicas em cima também, super viavel
// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0 ? 'par' : 'impar';
//     console.log(i, par)
// }

// Percorrendo Array no for
const frutas = ['Maça', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}
