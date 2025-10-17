// Atribuição via desestruturação (Objetos)

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Gomes',
    idade: 22,
    endereco: {
        rua: 'João de Lucas',
        numero: 50
    }
};

// // Atribuição normal
// const nome = pessoa.nome;

// Atribuição via desestruturação
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

// // Caso não exista o nome, ficara como undefined, mas podemos atribuir o valor aqui dentro mesmo
// const { nome1 = "atribuir aqui dentro", sobrenome1 } = pessoa;
// console.log(nome1, sobrenome1);

// // Caso queira outro nome para a variavel
// const { nome: teste, sobrenome2 } = pessoa;
// console.log(teste, sobrenome2);

// // Pegando coisa dentro de endereco
// const {
//     endereco: {rua: r = 1234, numero},
//     endereco
// } = pessoa;
// console.log(r, numero, endereco);

// // Pegando o resto também
// const { nome, ...resto } = pessoa;
// console.log(nome)
// console.log(resto)