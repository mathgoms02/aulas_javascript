// Pegando elemento dentro da classe container
const h1 = document.querySelector('.container h1');
const data = new Date();

function getNomeMes (numeroMes) {
    let numeroMesTexto;
    switch (numeroMes) {
        case 0:
            numeroMesTexto = 'janeiro';
            return numeroMesTexto;
        case 1:
            numeroMesTexto = 'fevereiro';
            return numeroMesTexto;
        case 2:
            numeroMesTexto = 'março';
            return numeroMesTexto;
        case 3:
            numeroMesTexto = 'abril';
            return numeroMesTexto;
        case 4:
            numeroMesTexto = 'maio';
            return numeroMesTexto;
        case 5:
            numeroMesTexto = 'junho';
            return numeroMesTexto;
        case 6:
            numeroMesTexto = 'julho';
            return numeroMesTexto;
        case 7:
            numeroMesTexto = 'agosto';
            return numeroMesTexto;
        case 8:
            numeroMesTexto = 'setembro';
            return numeroMesTexto;
        case 9:
            numeroMesTexto = 'outubro';
            return numeroMesTexto;
        case 10:
            numeroMesTexto = 'novembro';
            return numeroMesTexto;
        case 11:
            numeroMesTexto = 'dezembro';
            return numeroMesTexto;
        default:
            numeroMesTexto = '';
            return numeroMesTexto;
    }
}

function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'qexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        `de ${data.getFullYear()}`+
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaData(data.getDay());