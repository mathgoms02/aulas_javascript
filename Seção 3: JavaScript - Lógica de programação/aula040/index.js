// setInterval e setTimeout
// Funções de tempo

// Vamos fazer o relógio funcionar sem precisar rodar todo momento
// Utilizaremos o setInterval
function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval(){
    console.log(mostraHora());
}


// 1param: Ao invez de executar, vamos só chamar a referencia, que seria chamar sem os parenteses
// 2param: de quanto em quanto tempo vai ser executado em ms
// setInterval(funcaoDoInterval, 1000);

// __________________________________________________________________________________________________________________


// Uma boa prática é utilizar as funções anonimas. Criando ela direto no setInterval, então...
// setInterval(function () {
//     console.log(mostraHora());
// }, 1000);

// Para para o código, tem duas formas:
// - Pressionar ctrl+shift+P (f1) e digitar Stop Code Run (ou comando direto, Ctrl+Alt+M)
// - Ou Ctrl + C no terminal

// __________________________________________________________________________________________________________________

// Podemos jogar isso numa variavel
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

// E dessa forma, podemos adicionar o timeout para parar de acordo com um tempo determinado pelo dev
setTimeout(function () {
    clearInterval(timer);
}, 10000);

// Podemos adicionar timeout, nesse caso, ele vai executar um "olá mundo" depois de 5 segundos
setTimeout(function () {
    console.log("Olá mundo");
}, 10000);
