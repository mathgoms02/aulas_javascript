// For of -> Especifico para objetos iteraveis e obter diretamente o valor.
// Podemos usar utilizando o for convencional ou o for in também

const nomes = ['Matheus', 'Gomes']

// for (let i = 0; i < nome.length; i++){
//     console.log(nome[i]);
// }


// for (let i in nome){
//     console.log(nome[i]);
// }


// Utilizando o of, vem o valor direto
for (let valor of nomes){
    console.log(valor);
}

// _____________________________________________________________________________________________________________________________

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Gomes'
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

// // Isso aqui vai gerar erro falando que o objeto pessoa, não é iteravel, diferente de strings ou arrays
// for (let valor of pessoa){
//     console.log()
// }

// Um outro jeito, mas por agora não preciso me preocupar, que é o forEach, que fazemos ele utilizando função. OS parametros são opcionais.
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
});