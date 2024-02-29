let nome = 'Matheus';
let sobrenome = 'Gomes';
let idade = 21;
let peso = 54;
let alturaEmMetros = 1.7;
let imc;
imc = peso / (alturaEmMetros*alturaEmMetros);

let anoNascimento;
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa',peso,'kg.');
console.log('Tem', alturaEmMetros, 'e seu IMC é de', imc);
console.log('Nasceu em',anoNascimento+'.')

// template strings, muuuuuuuito melhor
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg.`);
console.log(`Tem ${alturaEmMetros}, e seu IMC é de ${imc}`);
console.log(`Nasceu em ${anoNascimento}.`)