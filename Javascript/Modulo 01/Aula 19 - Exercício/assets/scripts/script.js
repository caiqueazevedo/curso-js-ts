const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Evento previnido');
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        console.log('Digite um peso válido!')
        alert('Digite um peso válido!')
        return;
    } else if (!altura) {
        console.log('Digite uma altura válida!')
        alert('Digite uma altura válida!')
        return;
    } else {
        const imc = calc(peso, altura);

        if (imc < 18.5) {
            alert(`Seu IMC: ${imc.toFixed(2)} - Abaixo do peso`);
            console.log(peso, altura);
        }
        if (imc >= 18.5 && imc <= 24.9) {
            alert(`Seu IMC: ${imc.toFixed(2)} - Peso normal`);
            console.log(peso, altura);
        }
        if (imc >= 25 && imc <= 29.9) {
            alert(`Seu IMC: ${imc.toFixed(2)} - Sobrepeso`);
            console.log(peso, altura);
        }
        if (imc >= 30 && imc <= 34.9) {
            alert(`Seu IMC: ${imc.toFixed(2)} - Obesidade grau #01`);
            console.log(peso, altura);
        }
        if (imc >= 35 && imc <= 39.9) {
            alert(`Seu IMC: ${imc.toFixed(2)} - Obesidade grau #02`);
            console.log(peso, altura);
        }
        if (imc >= 40) {
            alert(`Seu IMC: ${imc.toFixed(2)} - Obesidade grau #03`);
            console.log(peso, altura);
        }
    }
});

function calc(peso, altura) {
    return imc = peso / (altura ** 2);
}

function createP() {
    return p = document.createElement('p')
}

/*


function result() {
    const resultado = document.querySelector('#resultado-final'); // Pegando o elemento e o valor do ID resultado no html
    resultado.innerHTML = ''; // Zerando o valor do elemento
    const r = document.createElement('p'); // criando um parágrafo
    r.classList.add('style'); // Adicionando uma classe ao parágrafo
    resultado.appendChild(r); // Adicionando um novo valor ao elemento relacionado ao ID Resultado

}

*/
// ------------------------------------------------------------------------------------------------------