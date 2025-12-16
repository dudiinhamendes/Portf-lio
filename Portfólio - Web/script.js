
const titulos = document.querySelectorAll('.subcard-titulo');

titulos.forEach(titulo => {
    titulo.addEventListener('click', () => {
        const subcard = titulo.parentElement;
        subcard.classList.toggle('aberto');
    });
});

const projetos = document.querySelectorAll('.portfolio .projeto');
const next = document.querySelector('.antes');
const prev = document.querySelector('.depois');

let atual = 0;

function mostrarProjeto(i) {
    projetos.forEach(p => p.classList.remove('ativo'));
    projetos[i].classList.add('ativo');
}

next.addEventListener('click', () => {
    atual = (atual + 1) % projetos.length;
    mostrarProjeto(atual);
});

prev.addEventListener('click', () => {
    atual = (atual - 1 + projetos.length) % projetos.length;
    mostrarProjeto(atual);
});
