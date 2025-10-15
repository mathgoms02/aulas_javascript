// ARRAYSSS

let alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos)
console.log(alunos[2])

alunos[2] = 'Eduardo'
alunos[3] = 'Luiza'
console.log(alunos)

console.log(alunos.length)


// // adicionadno varios valores ao final do array
// alunos[alunos.length] = 'Fabio';
// alunos[alunos.length] = 'Romero';
// alunos[alunos.length] = 'Luana';
// console.log(alunos)

// alunos.push('Fabio');
// alunos.push('Romero');
// alunos.push('Luana');
// console.log(alunos)


// // adicionado no começo
// alunos.unshift('Romero');
// alunos.unshift('Fabio');
// console.log(alunos)


// Removendo item do fim
// const removido = alunos.pop();   // podemos adicionar o valor removido a uma variavel
// console.log(removido);
// const removido = alunos.pop();
// console.log(alunos);


// // Removendo item do começo da lista
// const removido = alunos.shift();
// console.log(removido);
// console.log(alunos);


// removendo a partir do indice
// delete alunos[1];   // vai ficar com valor empty
// console.log(alunos);
// console.log(alunos[50]); // Isso não gera erro, vai voltar um undefined


// // repartindo o array
// alunos.push('Luana');
// alunos.push('Eduardo');
// console.log(alunos.slice(0, 3));

// Verificando tipagem
// console.log(typeof alunos); // vai retornar object, e não array
// console.log(alunos instanceof Array);   // assim, vai retornar como True, pq é um array
// alunos = 123;
// console.log(alunos instanceof Array); // testando não sendo um array

