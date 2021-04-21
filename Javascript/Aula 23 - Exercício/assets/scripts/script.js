const data = new Date();
const diaSemana = data.getDay();
const mes = data.getMonth();

function diaAtual(value) {
    let diaSemanaTexto = '';
    switch (value) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda-feira';
        case 2:
            return diaSemanaTexto = 'Terça-feira';
        case 3:
            return diaSemanaTexto = 'Quarta-feira';
        case 4:
            return diaSemanaTexto = 'Quinta-feira';
        case 5:
            return diaSemanaTexto = 'Sexta-feira';
        case 6:
            return diaSemanaTexto = 'sábado';
    }
}

function mesAtual(value) {
    let mes = '';
    switch (value) {
        case 0:
            return mes = 'Janeiro';
        case 1:
            return mes = 'Fevereiro';
        case 2:
            return mes = 'Março';
        case 3:
            return mes = 'Abril';
        case 4:
            return mes = 'Maio';
        case 5:
            return mes = 'Junho';
        case 6:
            return mes = 'Julho';
        case 7:
            return mes = 'Agosto';
        case 8:
            return mes = 'Setembro';
        case 9:
            return mes = 'Outubro';
        case 10:
            return mes = 'Novembro';
        case 11:
            return mes = 'Dezembro';
    }
}

function horaAtual() {
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    return `${hora}:${min}`;
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function mudarTextoHTML() {
    const titulo = document.querySelector('h1');
    titulo.innerHTML = `${diaAtual(diaSemana)}, ${data.getDate()} de ${mesAtual(mes)} de ${data.getFullYear()} - ${horaAtual()}`
}

mudarTextoHTML();

// MODO 02
function getDay(value) {
    const days = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
        'quinta-feira', 'sexta-feira', 'sábaod'
    ];
    return days[value];
}

function getMonth(value) {
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio',
        'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    return months[value];
}

function mudarTextoHTML2() {
    const h2 = document.querySelector('h2');
    h2.innerHTML = `${getDay(diaSemana)}, ${data.getDate()} de ${getMonth(mes)} de ${data.getFullYear()} - ${horaAtual()}`;
}

mudarTextoHTML2();

// MODO 03
function mudarTextoHTML3() {
    const h3 = document.querySelector('h3');
    h3.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full' });
}

mudarTextoHTML3();