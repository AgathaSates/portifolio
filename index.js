const dadosCardControleMedicamentos = {
    titulo: 'Controle de Medicamentos',
    imagem: 'https://i.imgur.com/bZPmqHx.gif' ,
    gif: 'https://i.imgur.com/smBc3uJ.gif',
    urlRepositorio: 'https://github.com/AgathaSates/Controle-de-Medicamentos',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: `Este foi meu 1° projeto em versão web, adaptado de uma aplicação console. Nele, desenvolvi funcionalidades como cadastro, edição, exclusão e listagem de medicamentos, pacientes, funcionários e prescrições. O objetivo foi aplicar os conceitos aprendidos em um sistema com estrutura mais robusta e interface interativa.`
};

let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado)
        throw new Error('Card não selecionado.');

    const imgCard = document.getElementById('imgCard');
    const stackCard = document.getElementById('stackCard');
    const tituloCard = document.getElementById('tituloCard');
    const descricaoCard = document.getElementById('descricaoCard');
    const urlRepositorio = document.getElementById('urlRepositorio');

    imgCard.src = cardSelecionado.imagem;
    tituloCard.textContent = cardSelecionado.titulo;
    descricaoCard.textContent = cardSelecionado.descricao;
    urlRepositorio.href = cardSelecionado.urlRepositorio;

    stackCard.innerHTML = '';

    for (let item of cardSelecionado.stack) {
        const iconeStack = document.createElement('img');
        iconeStack.width = 35;
        iconeStack.src = item;

        stackCard.appendChild(iconeStack);
    }
}

function selecionarPrimeiroCard() {
    if (cardSelecionado == dadosCardControleMedicamentos)
        return;

    cardSelecionado = dadosCardControleMedicamentos;
    carregarDadosCardAtual();
}


function abrirModalProjeto() {
    document.getElementById('portfolioModalLabel').textContent = cardSelecionado.titulo;
    document.getElementById('portfolioModalImage').src = cardSelecionado.gif;
}

function main() {
    const btnSelecionarPrimeiroCard = document.getElementById("btnSelecionarPrimeiroCard");
    const btnVerProjeto = document.getElementById("btnVerProjeto")

    btnSelecionarPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);

    btnVerProjeto.addEventListener('click', abrirModalProjeto);

    selecionarPrimeiroCard();
};

document.addEventListener('DOMContentLoaded', main);