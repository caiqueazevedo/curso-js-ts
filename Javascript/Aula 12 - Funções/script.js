function sum(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}


// Declaração padrão
function div(x, y) {
    return x / y;
}

// Declaração simplificada
// A arrow substitui a palavra function e vem depois da declaração do parametro
const raiz = (n) => {
    return n ** 0.5;
}

// Simplificação da declaração simplificada
const raiz2 = n => n ** 0.5;


console.log(sum(2, 3));
console.log(sub(3, 2));
console.log(mult(2, 5));
console.log(div(6, 2));
console.log(raiz(10));