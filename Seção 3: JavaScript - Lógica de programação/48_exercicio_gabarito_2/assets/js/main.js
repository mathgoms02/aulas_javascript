// Pegando elemento dentro da classe container
const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });