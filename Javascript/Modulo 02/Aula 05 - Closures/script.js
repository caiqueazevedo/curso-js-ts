function retornaFuncao() {
  const nome = 'luiz';
  return () => {
    return nome;
  }
}

const funcao = retornaFuncao();
console.dir(funcao);