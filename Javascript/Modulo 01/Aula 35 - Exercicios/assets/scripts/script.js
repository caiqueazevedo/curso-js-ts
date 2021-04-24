/* 
TODO -  Refazer usando o relógio do Date
*/

let relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let hora = 0;
let minuto = 0;
let segundo = 0;
let milesimo = 0;
let timer;


function atualizarRelogio() {
    let converterTempo = () =>
        `${zeroAEsquerda(hora)}:
         ${zeroAEsquerda(minuto)}:
         ${zeroAEsquerda(segundo)}:
         ${zeroAEsquerda(milesimo)}`;

    let atualizarHTML = () => relogio.innerHTML = converterTempo();
    atualizarHTML();
}

atualizarRelogio();

function iniciarRelogio(segundos) {
    timer = setInterval(() => {
        milesimo++;
        atualizarRelogio();

        if (milesimo == 60) {
            segundo++;
            milesimo = 0;
            atualizarRelogio();
        }

        if (segundo == 60 && minuto == 59) {
            hora++;
            minuto = 0;
            segundo = 0;
            milesimo = 0;
            atualizarRelogio();
        }

        if (segundo == 60) {
            minuto++;
            segundo = 0;
            milesimo = 0;
            atualizarRelogio();
        }
    }, 16);
}

iniciar.addEventListener('click', () => {
    relogio.classList.remove('pausado')
    pausar.innerHTML = 'Pausar';
    clearInterval(timer);
    iniciarRelogio();
});

pausar.addEventListener('click', () => {
    clearInterval(timer);
    pausar.innerHTML = 'Pausado'
    relogio.classList.add('pausado')
});

zerar.addEventListener('click', () => {
    clearInterval(timer);
    relogio.classList.remove('pausado')
    hora = 0;
    minuto = 0;
    segundo = 0;
    milesimo = 0;
    atualizarRelogio();
});

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}