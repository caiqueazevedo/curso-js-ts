// Escreve uma função chamada ePaisagem que recebe
// dois argumentos: Largura e Altura 
// de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

const imagem = {
    altura: 2,
    largura: 3
}

const ePaisagem = (largura, altura) => largura > altura;

console.log(`Modo paisagem: ${ePaisagem(imagem.largura, imagem.altura)}`);