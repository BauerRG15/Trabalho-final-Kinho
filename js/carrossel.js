// ==========================================================
// CARROSSEL DA HOME
//
// Mesma ideia do carrossel visto em aula:
// - uma lista (array) com os slides e um "indice" que diz qual aparece;
// - avancar e voltar mudam o indice com if/else;
// - setInterval troca sozinho, e clearInterval reinicia o tempo
//   quando a pessoa clica.
//
// A diferença: em aula só a foto trocava (moldura.src).
// Aqui cada slide tem foto ou vídeo, título e botão, então em vez
// de trocar a foto, a gente mostra um slide e esconde os outros
// com style.display.
// ==========================================================

var botaoVoltar;
var botaoAvancar;
var slides;
var bolinhas;
var indice;
var temporizador;

botaoVoltar  = document.getElementById("btnVoltar");
botaoAvancar = document.getElementById("btnAvancar");

// Os ids dos slides e das bolinhas, na ordem em que aparecem
slides   = ["slide1", "slide2", "slide3"];
bolinhas = ["bolinha1", "bolinha2", "bolinha3"];

// Começa no primeiro slide (o primeiro item do array é o 0)
indice = 0;

window.onload = inicio;

function inicio(){

    botaoVoltar.onclick  = voltarSlide;
    botaoAvancar.onclick = avancarSlide;

    // Cada bolinha leva para o seu slide
    document.getElementById("bolinha1").onclick = function(){
        irParaSlide(0);
    };
    document.getElementById("bolinha2").onclick = function(){
        irParaSlide(1);
    };
    document.getElementById("bolinha3").onclick = function(){
        irParaSlide(2);
    };

    mostrarSlide();
    automaticoSlide();
}

function voltarSlide(){

    if(indice > 0){
        indice--;
    }
    else{
        // Estava no primeiro: vai para o último
        indice = slides.length - 1;
    }

    mostrarSlide();
    clearInterval(temporizador);
    automaticoSlide();
}

function avancarSlide(){

    if(indice < slides.length - 1){
        indice++;
    }
    else{
        // Estava no último: volta para o primeiro
        indice = 0;
    }

    mostrarSlide();
    clearInterval(temporizador);
    automaticoSlide();
}

function irParaSlide(numero){

    indice = numero;

    mostrarSlide();
    clearInterval(temporizador);
    automaticoSlide();
}

// Troca de slide sozinho a cada 8000 milissegundos (8 segundos).
// Para mudar o tempo, troque o 8000.
function automaticoSlide(){

    temporizador = setInterval(avancarSlide, 8000);
}

// Esconde todos os slides e mostra só o do indice atual
function mostrarSlide(){

    for(var i = 0; i < slides.length; i++){
        document.getElementById(slides[i]).style.display = "none";
        document.getElementById(bolinhas[i]).className = "bolinha";
    }

    document.getElementById(slides[indice]).style.display = "block";
    document.getElementById(bolinhas[indice]).className = "bolinha ativo";
}
