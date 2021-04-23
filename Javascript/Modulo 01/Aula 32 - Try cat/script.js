function soma(x, y) {
    if (typeof x == 'number' && typeof y == 'number') {
        return x + y;
    }
    throw new Error('x e y precisam ser números.')
}

try {
    console.log(soma(1, '2'));
} catch (err) {
    err;
    console.log('Digíte um número válido.')
}