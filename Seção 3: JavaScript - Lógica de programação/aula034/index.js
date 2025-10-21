// For in - Lê os índices ou chaves do objeto

const frutas = ['Pera', 'Maça', 'Uva'];

// Aqui ele vai ler os indexs do array
for (let i in frutas) {
    console.log(i)  // 0 1 2
}

// Aqui ele vai ler os itens
for (let i in frutas) {
    console.log(frutas[i])
}

// ____________________________________________________________________________________________________________________________________________

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Gomes',
    idade: 23
};

for (let chaves in pessoa){
    console.log(chaves)  // Vai ler as chaves
}


// Foi dito sobre essa forma de pegar os itens do objeto. Não antes mencionado, acho que assim é melhor, com os colchetes.
console.log(pessoa.nome);
console.log(pessoa['nome']);

// Tendo isso em mente, podemos fazer isso
for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}