const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = documento.querySelector('.button');
const tarefa = document.querySelector('.tarefa');
const criarLi = document.createElement('li');

function criarTarefa(textoInput) {
    criarLi.innerHTML = textoInput;
    tarefa.appendChild(criarLi);
};

btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
});