let min = 1;
let max = 100;
let intentoActual = null;

function habilitarBotones() {
    document.getElementById('masBajoBtn').disabled = false;
    document.getElementById('masAltoBtn').disabled = false;
    document.getElementById('eseEsBtn').disabled = false;
}

function adivinarNumero() {
    intentoActual = Math.floor((min + max) / 2);
    document.getElementById('resultado').innerText = `¿Es ${intentoActual}?`;
    habilitarBotones();
    document.getElementById('adivinaBtn').disabled = true;
}

function masBajo() {
    max = intentoActual - 1;
    intentoActual = Math.floor((min + max) / 2);
    document.getElementById('resultado').innerText = `¿Es ${intentoActual}?`;
}

function masAlto() {
    min = intentoActual + 1;
    intentoActual = Math.floor((min + max) / 2);
    document.getElementById('resultado').innerText = `¿Es ${intentoActual}?`;
}

function eseEsElNumero() {
    document.getElementById('resultado').innerText = `¡Zaliman ha adivinado tu número! 🎉 Es ${intentoActual}.`;
    document.getElementById('reiniciarBtn').disabled = false;
    document.getElementById('masBajoBtn').disabled = true;
    document.getElementById('masAltoBtn').disabled = true;
    document.getElementById('eseEsBtn').disabled = true;
}

function reiniciarJuego() {
    min = 1;
    max = 100;
    intentoActual = null;
    document.getElementById('resultado').innerText = '';
    document.getElementById('adivinaBtn').disabled = false;
    document.getElementById('reiniciarBtn').disabled = true;
}

