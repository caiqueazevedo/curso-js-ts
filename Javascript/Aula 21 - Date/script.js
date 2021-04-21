const data = new Date();
console.log(data.toString());

console.log(data);
const tresHoras = 60 * 60 * 3 * 1000;
const data2 = new Date(0 + tresHoras);
console.log(data2);

const data3 = new Date(2021, 3, 21);
console.log(data3);

const data4 = new Date('2021-04-21 15:36');
console.log(data4);

console.log('dia', data.getDate());
console.log('mês', data.getMonth());
// (0 - Janeiro), (1 - Fevereiro), (2 - Março) ... (11 - Dezembro)
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
// (0 - Domingo), (1 - Segunda), (2 - Terça), (3 - Quarta), (4 - Quinta), (5 - Sexta), (6 - Sábado)
console.log('dia da semana', data.getDay());

// Formatando data MANUALMENTE

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}\ ${mes}\ ${ano} - ${hora}:${min}:${sec}`
}

console.log(formataData(data));