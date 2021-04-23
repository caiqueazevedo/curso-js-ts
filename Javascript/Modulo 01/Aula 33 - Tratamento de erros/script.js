/*
try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo');
    console.log('Fechei o arquivo');
} catch (err) {
    console.log('Tratando erro');
} finally {
    console.log('Sempre serei executado');
}
*/

function retornaHora(data) {
    if (data && !(data instanceof date)) {
        console.log('não é data');
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data) data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

try {
    const data = new Date();
    const hora = retornaHora(data);
} catch (err) {

} finally {
    console.log('Tenha um bom dia!')
}