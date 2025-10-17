// // Mais diferenças entre var e let/const
// let nome1 = 'Matheus';
// var nome2 = 'Matheusg';

// // Não podemos redeclarar let
// // let nome1 = 'Gomes';


// // Let tem escopo de bloco, então podemos fazer algo assim; Ele procura o bloco mais próximo

// const verdadeira = true;

// if (verdadeira) {
//     let nome1 = 'Gomes';
//     var nome2 = 'Gomes';
//     // console.log(nome1, nome2);
    
//     if (verdadeira) {
//         var nome2 = 'Sá';
//         let nome1 = 'FILIPE?'
//         // console.log(nome1, nome2)
//     }
// }

// // Aqui ele vai printar o let declarado fora dos escopos, e o ultimo var declarado
// console.log(nome1, nome2);

// // OU seja, o let declarado dentro de um um bloco, não vai adiantar para os proximos, por exemplo:
// var item = 'Caixa';

// if (verdadeira) {
//     let material = 'Madeira';
//     console.log(item);
// }
// // Não vai printar o material, vai gerar erro
// console.log(material)

// ______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// Var tem escopo de função.
// // exemplo

// var sobrenome = 'Mirando';

// function falaOi () {
//     var nome_funcao = 'Luiz'
//     console.log(sobrenome); // Ela consegue printar var declarado fora da função
// }

// // Vai dar erro, foi definido dentro da função, e a função protege
// console.log(nome_funcao);
// falaOi();


// ____________________________________________________________________________________________________________________________________________________________________________________


// Não da erro, ele encontra a variavel, mas vem como undefined (hosting?)
// Com o Let vai gerar erro
console.log(teste_antes_declarar);

var teste_antes_declarar = 'AIN'