const num = Number(prompt('Digite um número: '));
const numTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numTitulo.innerHTML = num;

texto.innerHTML = `<p>Raiz quadrada ${num ** 0.5}<br /></p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}<br /></p>`;
texto.innerHTML += `<p>É Nan: ${Number.isNaN(num)}<br /></p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}<br /></p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}<br /></p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}<br /></p>`;
