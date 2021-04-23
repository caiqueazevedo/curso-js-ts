const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let n of numeros) {

    if (n === 3 || n === 6) {
        console.log('Pulei o número')
        continue; // Não exibe o console, volta para o laço
    }

    if (n === 7) {
        console.log('Achei o 7')
        break;
    }

    console.log(n)
}