function relogio(){

    function criaHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000); // deixando em milésimos de segundos
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'UTC'
        });
    }


    const relogio = document.querySelector('.relogio');

    // Não precisa chamar da forma que utilizamos
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');

    let segundos = 0;
    let timer;

    function iniciarRelogio(){
        // O escopo da função, protege a variavel let
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }


    // Melhor forma de lidar com vários botões:
    document.addEventListener('click', function(e) {
        // console.log(e.target);  // vai falar qual elemento esta sendo clicado
        // el -> elemento

        const el = e.target;

        if (el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');    // removendo classe pausado
            clearInterval(timer);                   // Dar um clear no interval para não deixar dois timers brigando
            iniciarRelogio();
        }

        if (el.classList.contains('pausar')){
            relogio.classList.add('pausado');       // adicionando classe pausado
            clearInterval(timer);
        }

        if (el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });


    // // Método pouco eficaz
    // iniciar.addEventListener('click', function(event){
    //     relogio.classList.remove('pausado');    // removendo classe pausado
    //     clearInterval(timer); // Dar um clear no interval para não deixar dois timers brigando
    //     iniciarRelogio();
    // });

    // pausar.addEventListener('click', function(event){
    //     relogio.classList.add('pausado');       // adicionando classe pausado
    //     clearInterval(timer);
    // });

    // zerar.addEventListener('click', function(event){
    //     clearInterval(timer);
    //     relogio.innerHTML = '00:00:00';
    //     segundos = 0;
    // });

}

relogio();