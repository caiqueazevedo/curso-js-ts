const elements = [
    { tag: 'h1', texto: 'Título' },
    { tag: 'h2', texto: 'Subtítulo' },
    { tag: 'p', texto: 'Parágrafo' },
    { tag: 'footer', texto: 'Rodapé' }
];

function generateTagsAndTagvalue(value) {

    const container = document.querySelector('.container');

    for (let i = 0; i <= value.length; i++) {

        const element = value[i];
        const { tag, texto } = element;
        const generatedTag = document.createElement(tag);
        const textoCriado = document.createTextNode(texto);

        container.appendChild(generatedTag);
        generatedTag.appendChild(textoCriado)

    }
}

generateTagsAndTagvalue(elements);