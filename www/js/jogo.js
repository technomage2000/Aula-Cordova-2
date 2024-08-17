window.onload = function() {
    document.addEventListener('deviceready', inicio, false);
}

function inicio() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', apertou);
    
}
var numeroCerto =  Math.floor(Math.random() * (100 - 0 + 1));
var primeiraJogada = true;

function ajustaPrimeira(){
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML = "Digite o número certo";
    var botao = document.getElementById('botao');
    botao.valu = "Salvar";
}

function jogando(){
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML = 'Digite um número:';
    var botao = document.getElementById('botao');
    botao.valu = "Verificar";
}


function apertou() {
    
    if(primeiraJogada){
        numeroCerto = digitado;
        primeiraJogada = false;
        jogando();
    }else {

    
    var campoSaida = document.getElementById('saida');

    var campoNumero = document.getElementById('numero');
    var digitado = campoNumero.value;

    if(digitado == numeroCerto) {
        campoSaida.innerHTML = 'Acertou!';
    } else {
        if(digitado > numeroCerto) {
            campoSaida.innerHTML = 'Digite um número menor!';
        } else {
            campoSaida.innerHTML = 'Digite um número maior!';
        }
    }
}
}