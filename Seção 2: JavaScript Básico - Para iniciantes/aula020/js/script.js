// IIFE -> função que é criada e chamada ao mesmo tempo??

// selecionando itens do HTML no JavaScript
function meuEscopo () {
    const form = document.querySelector('.form'); // utilizei a classe para localizar
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();    // se eu colocar apenas o console log, ele vai atualizar e não vai aparecer, então, essa linha faz não atualizar a pagina
    //     alert(1);
    //     console.log("Forms enviado!"); 
    // };

    // outro jeito de fazer o que foi feito

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // nome.value -> pegar valor do input
        // Adicionar no array, e printar na DIV
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };
        const output = `${pessoa.nome} ${pessoa.peso} ${pessoa.altura}<br />`;

        resultado.innerHTML += output;

        pessoas.push(pessoa);
        console.log(pessoas);

    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();


// GABARITO
//___________________________________________________________________________________________________________


// function meuEscopo () {
//     const form = document.querySelector('.form');
//     const resultado = document.querySelector('.resultado');

//     const pessoas = [];

//     function recebeEventoForm(evento) {
//         evento.preventDefault();

//         const nome = form.querySelector('.nome');
//         const sobrenome = form.querySelector('.sobrenome');
//         const peso = form.querySelector('.peso');
//         const altura = form.querySelector('.altura');

//         pessoas.push({
//             nome: nome.value,
//             sobrenome: sobrenome.value,
//             peso: peso.value,
//             altura: altura.value
//         });

//         console.log(pessoas);

//         resultado.innerHTML += `<p>${nome.value} ${peso.value} ${altura.value}</p>`;


//     }

//     form.addEventListener('submit', recebeEventoForm);
// }
// meuEscopo();