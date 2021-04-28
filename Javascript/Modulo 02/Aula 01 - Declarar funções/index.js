// First-class objects (Objetos de primeira classe)
// Ou seja, podemos tratar função como um dado comum

// Function hoisting
/* a função é levada ao topo, não importa se chamada antes ou depois 
 * de ser criada a função 
 */
function dizOi() {
  return 'oi';
}

// Function experssion
const dizTchau = function () {
  return 'tchau';
}

// Arrow function
const dizAdeus = () => {
  return 'adeus';
}

// Dentro de objetos
const objeto = {
  // metodo 01
  falar: function () {
    return 'Estou falando'
  }
}

const objeto2 = {
  // metodo 02
  falar() {
    return 'estou falando'
  }
}