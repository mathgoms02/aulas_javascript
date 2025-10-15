// Capturar evento de submit do formulário
const form = document.querySelector('#form'); //Utilizando '#' por estar utilizando id

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Pegandi input inteiros
    // e.target (mais comum) faz a mesma coisa que a outra função utilizando form.querySelector...
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // Pegando valor e indo pra numérico
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Tratando valores de peso e altura
    if (!peso){
        setResult('Peso inválido', false);
        return;
    }

    if (!altura){
        setResult('Altura inválido', false);
        return;
    }

    // Pegando valores de imc e nivel com funções
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResult(msg, true);
});


// Pegar nível do IMC (de uma forma melhor, se eu utilizo o return, posso ficar em paz para não usar else if)
function getNivelImc (imc) {
    // Utilizando Array e lógica compacta. Feito de trás para frente (pq é realmente a melhor lógica)
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 15.5) return nivel[1];
    if (imc < 28.5) return nivel[0];
}


// Função para pegar IMC
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


// Função para criar parágrafos
function criaP (className) {
    const p = document.createElement('p');  // Criando parágrafo utilizando JS (ao invez de direto no html)
    return p;
}


// Função para colocar a mensagem no HTML, com flag isValid para formatação
function setResult (msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;         // Parágrado criado.
    result.appendChild(p);                  // Adicionando o parágrafo no nosso result
    // p.classList.add(className); // No parágrafo, adicionando uma class (ao invez de direto no html)
}

