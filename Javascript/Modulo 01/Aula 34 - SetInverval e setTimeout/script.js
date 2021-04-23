function mostraHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(() => {
    console.log(mostraHora());
}, 1000)

/*
setInterval(() => { // Atualiza de 1 em 1 segundo
    console.log(mostraHora());
}, 1000);
*/
setTimeout(() => { // Pausa a execução após 3 segundos
    clearInterval(timer);
}, 3000);

setTimeout(() => {
    console.log('Olá mundo!');
}, 5000);