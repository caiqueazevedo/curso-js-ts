const hora = 10;

if (hora < 12 && hora > 4) {
    console.log('Bom dia');
} else if (hora <= 18 && hora >= 12) {
    console.log('Boa Tarde');
} else if (hora <= 4 && hora > 18) {
    console.log('Boa noite');
};