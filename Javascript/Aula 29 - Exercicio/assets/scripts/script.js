const paragrafos = document.querySelectorAll('p'); //NodeList

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody;
    console.log(p)
}