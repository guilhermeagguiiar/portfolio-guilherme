
// Selecionando o botão e o menu
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Verificando se os elementos existem
if (menuBtn && menu) {

    // Quando clicar no botão
    menuBtn.addEventListener("click", function() {

        // Abre ou fecha o menu
        menu.classList.toggle("menu-aberto");

    });

}

/* EFEITO DE DIGITAÇÃO */

const textoAnimado = document.getElementById("texto-animado");

const palavras = [
    "tecnologia.",
    "programação.",
    "desenvolvimento Full Stack.",
    "Vibecoding."
];

let palavraAtual = 0;
let letraAtual = 0;
let apagando = false;

function digitar() {

    const palavra = palavras[palavraAtual];

    if (!apagando) {

        textoAnimado.textContent =
            palavra.substring(0, letraAtual + 1);

        letraAtual++;

        if (letraAtual === palavra.length) {
            apagando = true;
            setTimeout(digitar, 1500);
            return;
        }

    } else {

        textoAnimado.textContent =
            palavra.substring(0, letraAtual - 1);

        letraAtual--;

        if (letraAtual === 0) {
            apagando = false;

            palavraAtual++;

            if (palavraAtual >= palavras.length) {
                palavraAtual = 0;
            }

        }

    }

    setTimeout(digitar, apagando ? 50 : 100);
}

if (textoAnimado) {
    digitar();
}

/* BOTÃO VOLTAR AO TOPO */

const botaoTopo = document.getElementById("voltar-topo");

if (botaoTopo) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 300) {
            botaoTopo.classList.add("visivel");
        } else {
            botaoTopo.classList.remove("visivel");
        }

    });

    botaoTopo.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}