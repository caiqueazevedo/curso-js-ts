const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[0]);
alunos[0] = 'Luiza';
console.log(alunos[0])

// Adiciona um novo elemento no final da lista
alunos.push('Clara');
console.log(alunos);

// Adiciona um novo elemento no começo da lista
alunos.unshift('Eduardo');
console.log(alunos);

// Filtra o resultado da busca, do indíce X até o indíce Y
console.log(alunos.slice(1, 3));

// Remove o último elemento da lista
alunos.pop();
console.log(alunos);

// Remove o primeiro elemento da lista
alunos.shift();
console.log(alunos);

// Salva o elemento removido
const alunoRemovido = alunos.pop();
console.log(alunoRemovido);

// Remove o elemento da lista e mantém o índice vázio
delete alunos[1];
console.log(alunos);