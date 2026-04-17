function alterarConteudo() {
            let novoTexto = prompt("O que você deseja escrever no parágrafo?");

            if (novoTexto !== null && novoTexto !== "") {
                const elementoParaAlterar = document.getElementsByClassName('trocavel');
                elementoParaAlterar[0].innerText = novoTexto;
                elementoParaAlterar[0].classList.add('destaque');
                console.log("Conteúdo alterado com sucesso para: " + novoTexto);
            }
        }