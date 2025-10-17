function transformWeekDay (weekDay) {
    let weekDayText;
    switch (weekDay) {
        case 0:
            weekDayText = 'Domingo';
            return weekDayText;
        case 1:
            weekDayText = 'Segunda-Feira';
            return weekDayText;
        case 2:
            weekDayText = 'Terça-Feira';
            return weekDayText;
        case 3:
            weekDayText = 'Quarta-Feira';
            return weekDayText;
        case 4:
            weekDayText = 'Quinta-Feira';
            return weekDayText;
        case 5:
            weekDayText = 'Sexta-Feira';
            return weekDayText;
        case 6:
            weekDayText = 'Sábado';
            return weekDayText;
        default:
            weekDayText = '';
            return weekDayText;
    }
}


function transformMonth (month) {
    const monthText = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    return monthText[month];
}


function formatDate (date) {
    const weekDay = transformWeekDay(date.getDay());
    const day = date.getDate();
    const month = transformMonth(date.getMonth());
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return `${weekDay}, ${day} de ${month} de ${year}</br>${hour}:${minutes}`;
}


const date = new Date();
const formatedDate = formatDate(date);
const date_field = document.getElementById('date');

date_field.innerHTML = formatedDate;