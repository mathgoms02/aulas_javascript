/**
 * Timer em HTML
 * Timer começar em preto
 * quando pausado precisa estar em vermelho
 * quando continuar voltar para preto
 * ter funções Iniciar, Pausar e zerar
 */

// Para pegar eventos de click nos botões. É quase igual o resto, segue o mesmo raciocinio do Forms pelo visto
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let hour = 0;
let minute = 0;
let second = 0;


function fixNumber(num) {
    return num >= 10 ? num : `0${num}`;
}


function onTimer(){
    if (minute === 60){
        minute = 0;
        hour++;
    }
    if (second === 60){
        second = 0;
        minute++;
    }
    second++

    return `${fixNumber(hour)}:${fixNumber(minute)}:${fixNumber(second)}`;
}


iniciar.addEventListener('click', function(event){
    relogio.style.color = '#000000';
    const timer = setInterval(function (){
        relogio.innerHTML = onTimer();
    }, 1000);

    pausar.addEventListener('click', function(event){
        relogio.style.color = '#a30000ff';
        setTimeout(function () {
            clearInterval(timer);
        })
    });

})

zerar.addEventListener('click', function(event){
    relogio.innerHTML = '00:00:00';
    hour = 0;
    minute = 0;
    second = 0;
});
