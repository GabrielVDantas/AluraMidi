function tocarSom (id) {
    const elemento = document.querySelector(id);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('O elemento em questão não foi encontrado');
    }

}

const todosOsBotoes = document.querySelectorAll('.botao');

for (let i = 0; i < todosOsBotoes.length; i++) {

    const botao = todosOsBotoes[i];
    const som = botao.classList[1];
    const idSom = `#som_${som}`; //template string

    botao.onclick = function () {
        tocarSom(idSom);
    }

    botao.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            botao.classList.add('ativa');
        }

    }

    botao.onkeyup = function () {
        botao.classList.remove('ativa');
    }

}
