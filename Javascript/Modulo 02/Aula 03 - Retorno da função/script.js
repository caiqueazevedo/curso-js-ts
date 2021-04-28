function soma(a, b) {
  return a + b;
};

soma(2, 4);

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);