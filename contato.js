// ==========================================================
// FORMULÁRIO DE CONTATO
//
// O botão "Enviar" do HTML chama a função enviar() pelo onclick.
// A função confere os campos e escreve um aviso na página.
// Nada é enviado para servidor.
// ==========================================================

function enviar() {

    // Pega o que a pessoa digitou em cada campo
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var pessoas = Number(document.getElementById("pessoas").value);
    var texto = document.getElementById("texto").value;

    // Confere um campo por vez. Se estiver errado, avisa e para (return).
    if (nome.length < 3) {
        avisar("Digite seu nome completo.", "erro");
        return;
    }

    if (email.indexOf("@") == -1) {
        avisar("Digite um e-mail válido.", "erro");
        return;
    }

    if (pessoas < 1 || pessoas > 30) {
        avisar("O número de pessoas deve ser entre 1 e 30.", "erro");
        return;
    }

    if (texto.length < 5) {
        avisar("Escreva uma mensagem.", "erro");
        return;
    }

    // Se chegou aqui, está tudo certo
    avisar("Obrigado, " + nome + "! Recebemos sua mensagem.", "sucesso");

    // Limpa os campos do formulário
    document.getElementById("form-contato").reset();
}

// Escreve o aviso na página.
// O tipo ("erro" ou "sucesso") vira uma classe do CSS que muda a cor.
function avisar(texto, tipo) {
    var mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
}
