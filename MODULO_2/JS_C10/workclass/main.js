const operacionTxt = document.getElementById('operaciontxt');
const numeroTxt = document.getElementById('numbertxt');
const operarBtn = document.getElementById('operarbtn');
const contadorTxt = document.getElementById('contadortxt');

let contador = 0;

function operar() {
    if (
        operacionTxt.value !== 'sumar' && 
        operacionTxt.value !== 'restar' &&
        operacionTxt.value !== 'multiplicar' &&
        operacionTxt.value !== 'dividir'
    ) {
        contadorTxt.textContent = 'Operación errónea';
        return;
    }

    if (operacionTxt.value === 'sumar') {
        contador += Number(numeroTxt.value);
    }

    if (operacionTxt.value === 'restar') {
        contador -= Number(numeroTxt.value);
    }

    if (operacionTxt.value === 'multiplicar') {
        contador *= Number(numeroTxt.value);
    }

    if (operacionTxt.value === 'dividir') {
        contador /= Number(numeroTxt.value);
    }

    contadorTxt.textContent = contador;
}

operarBtn.addEventListener('click', () => operar());

numeroTxt.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        operar();
    }
});