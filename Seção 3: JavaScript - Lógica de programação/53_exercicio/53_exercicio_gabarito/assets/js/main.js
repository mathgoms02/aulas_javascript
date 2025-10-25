// DOM -> Document Object Model

const elementos = [
    {tag: 'p', texto: 'Frase1'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'section', texto: 'Frase3'},
    {tag: 'footer', texto: 'Frase4'},
];

// querySelector seleciona apenas um elemento
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i=0; i<elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);

    // tagCriada.innerHTML = texto;
    // tagCriada.innerText = texto;    // é mais seguro, como seu que só tem texto, podemos usar. Não tem tags HTML.
    let textoCriado = document.createTextNode(texto);   // Podemos também criar node de text.

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);