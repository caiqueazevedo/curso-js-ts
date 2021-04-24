const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.button');
const tarefa = document.querySelector('.tarefa');

carregarTarefas();

// Carregar ---------
function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefasSalvas);

    for (let t of listaDeTarefas) {
        criarTarefa(t);
    }
}

// Salvar ---------------------------------------------
function salvarTarefas() {
    const li = tarefa.querySelectorAll('li');
    const listaTarefas = [];
    for (let t of li) {
        let liTarefa = t.innerText;
        liTarefa = liTarefa.replace('Apagar', '').trim();
        console.log(liTarefa);
        listaTarefas.push(liTarefa);
    }

    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

// Criar ---------------------------------------------

function criarTarefa(textoInput) {
    const li = criarItemNaLista();
    li.innerHTML = textoInput;
    tarefa.appendChild(li);
    criarBotaoApagar(li);
    limparInput();
    salvarTarefas();
};

function criarItemNaLista() {
    const li = document.createElement('li');
    return li;
}

function criarBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar);
    salvarTarefas();
}

// Apagar ---------------------------------------------

function apagarTarefa(value) {
    if (value.classList.contains('apagar')) {
        value.parentElement.remove();
        window.localStorage.removeItem(value)
    }

    salvarTarefas();
}

function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// Validar ---------------------------------------------

function validarInput() {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
}

// Eventos ---------------------------------------------

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        validarInput();
    }
});

btnTarefa.addEventListener('click', () => {
    validarInput();
});

document.addEventListener('click', (e) => {
    const elemento = e.target;
    apagarTarefa(elemento);
})