// Algumas dicas:
// const paragrafos = document.querySelector('.paragrafos');

// Ao inves de utilizar dessa forma, podemos utilizar o querySelectorAll('p');. Que vai retornar um NodeList(3) [p, p, p]
// Esse NodeList não é um Array, se comporta bem igual, mas não é um array. Ainda sim, podemos utilizalo num for, por exemplo.

// const ps = document.querySelectorAll('p');
// console.log(ps.length)

// for (let p of ps){
//     console.log(p);
// }

// // Pegar cor do body
// const estilosBody = getComputedStyle(document.body);
// const backgroundColorBody = estilosBody.backgroundColor;


// Exercicio: Pegar o fundo do background do body, e colocar no paragrafo. Colocar a cor do texto do parágrafo em branco também.

const paragrafos = document.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of paragrafos){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}