// https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model
/*
Lembrando que o objeto geral é o window. COmo se fosse o topo da cadeia. Por exemplo, temos window.document, que é o documento html.

Dentro do #document, navegando na Arvore (DOM) temos o documento html com o body e head.

O topo sendo o document, temos childs dos anteriores, o body é um child do html, e assim vai...
Document > html > body
*/

/*
No JavaScript, usamos a API do DOM para criar elementos e outros.
Utilizamos o document.createElement();


No exercicio 53, utilizamos bastante dessa API do DOM.

No html, se digitarmos a classe de alguma coisa do HTML, vamos ver ele sendo selecionado no HTML
*/

// Podemos, por exemplo também, alterar a cor de algo, direto no console.
// Se temos um h1 no nosso documeto, podemos declarar ele numa variavel direto no console do nevagedor
const h1 = container.querySelector('h1');

// Depois rodar no console algo como
h1.style.backgroundColor = 'red';

// Vamos alterar a cor do background para vermelho direto pelo console utilzando a API do DOM

/*
Quando é falado DOM no curso, esta se referindo ao navegador. Uma interface de elementos manipulavel


*/