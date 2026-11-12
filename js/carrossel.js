// Variáveis
var botaoVoltar;
var botaoAvancar;
var slides;
var bolinhas;
var indice;
var temporizador;

botaoVoltar  = document.getElementById("btnVoltar");
botaoAvancar = document.getElementById("btnAvancar");

// Lista de Slides
slides   = ["slide1", "slide2", "slide3"];
bolinhas = ["bolinha1", "bolinha2", "bolinha3"];

indice = 0;

// Início
window.onload = inicio;

function inicio(){

    botaoVoltar.onclick  = voltarSlide;
    botaoAvancar.onclick = avancarSlide;

    // Bolinhas Carrossel
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

// Voltar Slide
function voltarSlide(){

    if(indice > 0){
        indice--;
    }
    else{
        indice = slides.length - 1;
    }

    mostrarSlide();
    clearInterval(temporizador);
    automaticoSlide();
}

// Avançar Slide
function avancarSlide(){

    if(indice < slides.length - 1){
        indice++;
    }
    else{
        indice = 0;
    }

    mostrarSlide();
    clearInterval(temporizador);
    automaticoSlide();
}

// Ir para Slide
function irParaSlide(numero){

    indice = numero;

    mostrarSlide();
    clearInterval(temporizador);
    automaticoSlide();
}

// Tempo Automático
function automaticoSlide(){

    temporizador = setInterval(avancarSlide, 8000);
}

// Mostrar Slide
function mostrarSlide(){

    for(var i = 0; i < slides.length; i++){
        document.getElementById(slides[i]).style.display = "none";
        document.getElementById(bolinhas[i]).className = "bolinha";
    }

    document.getElementById(slides[indice]).style.display = "block";
    document.getElementById(bolinhas[indice]).className = "bolinha ativo";
}
