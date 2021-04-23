// Escreva uma função que recebe 2 números e retorne o maior dels

const maiorDeDois = (x, y) => x > y ? x : y;


// testando função com mais números
const numeros = [2, 3, 2, 1, 10, 76, 30, 100, 2, 27, 49];

function maiorNumero(array) {
    let maior = 0;
    for (let n = 0; n < array.length; n++) {

        let nextIndex = array[n + 1];
        let index = array[n];
        let temp = 0;

        if (nextIndex < index) {
            temp = index;
        }
        if (temp > maior) {
            maior = temp
        }
    }
    console.log(maior)
}

maiorNumero(numeros);