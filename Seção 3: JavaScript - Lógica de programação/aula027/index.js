// Lidando com datas
// A função date é uma função construtora
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const data = new Date();
console.log(data.toString());

const tresHoras = 60 * 60 * 3 * 1000;   // pra pegar fuso certo
const data_zero = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix (época unix - varia de acordo com fuso horário)
console.log(data_zero.toString());

// Para custom temos os parametros (ano, mês[0:11], dia, hora, minuto, segundos, ms)
const data_custom = new Date(2025, 3, 20, 15, 14, 27, 500);
console.log(data_custom.toString());

// Utilizando String para datas (tem os formatos reconhecidos padrão)
const data_string = new Date('2019-04-20 20:20:59')
console.log(data_string.toString());

// Pegando valores especificos
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth()+1)   // mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia Semana', data.getDay())    // 0 - Domingo, 6 - Sábado


// Printando milisegundos desde o ponto zero (unix)
console.log(Date.now());

// Posso pegar o valor em milisegungos e colocar dentro do Date
const data_atual_usando_ms = new Date(1760572429191);


// ________________________________________________________________________________________________________________________________________________________________

// Função para colocar zeros a esquerda
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}


// Função para formatar data
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data_1 = new Date();
const dataBrazil = formataData(data_1);
console.log(dataBrazil);