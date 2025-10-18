const h1 = document.querySelector('.container');

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

function criaElemento(className){
    const elemento = document.createElement(className);
    return elemento;
}

for (let i = 0; i < elementos.length; i++) {
    const elemento = criaElemento(elementos[i].tag);

    elemento.innerHTML = elementos[i].texto;
    h1.appendChild(elemento)
}