function formulario() {
    const listaDePessoas = [];
    const forms = document.querySelector('.form');

    function receberDados(evento) {
        evento.preventDefault();

        const nome = forms.querySelector('#nome');
        const sobrenome = forms.querySelector('#sobrenome');
        const idade = forms.querySelector('#idade');
        const altura = forms.querySelector('#altura');

        listaDePessoas.push(newUser(
            nome.nodeValue,
            sobrenome.nodeValue,
            idade.nodeValue,
            altura.nodeValue
        ));

        const resultado = document.querySelector('.resultado');
        resultado.innerHTML += `Nome: ${nome.nodeValue}, Sobrenome: ${sobrenome.nodeValue}, idade: ${idade.nodeValue}, altura: ${altura.nodeValue}`

        console.log(listaDePessoas);
    };

    forms.addEventListener('submit', receberDados);
};

function newUser(nome, sobrenome, idade, altura) {
    return {
        nome,
        sobrenome,
        idade,
        altura
    }
}

formulario();