// While e Do While
// Normalmente utilizamos para arrays que não sabemos o tamanho

let i = 0;

while (i<=10) {
    console.log(i);
    i++;
}

//________________________________________________________________________________________________________________________

const nome = 'Matheus';
i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++
}


//________________________________________________________________________________________________________________________

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 0;
const max = 50;
let rand = random(min, max);

// Cada vez que gerar o numero aleatório, quero saber quando ele for 10

// while (rand !== 10) {
//     rand = random(min, max);
//     console.log(rand);
// }


//________________________________________________________________________________________________________________________

// Vamos ver do while. A diferença entre os dois, é que o While ele checa a condição e executar o laço
// O Do while, ele vai executar depois ele vai checar

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);