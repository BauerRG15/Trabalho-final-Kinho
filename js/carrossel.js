// ==========================================================
// CARROSSEL DA HOME
//
// Como funciona:
// - No CSS, todo slide começa escondido (display: none).
// - Só aparece o slide que tem a classe "ativo".
// - Este arquivo só tira a classe "ativo" de um slide
//   e coloca em outro.
//
// Os botões do HTML chamam as funções daqui pelo onclick:
//   seta direita  -> proximoSlide()
//   seta esquerda -> slideAnterior()
//   bolinhas      -> mostrarSlide(0), mostrarSlide(1), mostrarSlide(2)
// ==========================================================

// Lista com todos os slides e todas as bolinhas da página
var slides = document.querySelectorAll(".slide");
var bolinhas = document.querySelectorAll(".bolinha");

// Número do slide que está aparecendo (o primeiro é o 0)
var atual = 0;

// Mostra o slide do número recebido e esconde os outros
function mostrarSlide(numero) {

    // Se passou do último, volta para o primeiro
    if (numero >= slides.length) {
        numero = 0;
    }

    // Se voltou antes do primeiro, vai para o último
    if (numero < 0) {
        numero = slides.length - 1;
    }

    // Tira a classe "ativo" de todos os slides e bolinhas
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ativo");
        bolinhas[i].classList.remove("ativo");
    }

    // Coloca a classe "ativo" só no slide e na bolinha escolhidos
    slides[numero].classList.add("ativo");
    bolinhas[numero].classList.add("ativo");

    // Guarda qual slide está aparecendo agora
    atual = numero;
}

function proximoSlide() {
    mostrarSlide(atual + 1);
}

function slideAnterior() {
    mostrarSlide(atual - 1);
}

// Troca de slide sozinho a cada 8000 milissegundos (8 segundos).
// Para mudar o tempo, troque o 8000.
setInterval(proximoSlide, 8000);
