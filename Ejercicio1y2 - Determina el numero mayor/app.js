let resultado = document.getElementById('resultado');

function determinarMayor() {
    let value1 = document.getElementById('valor1').value;
    let value2 = document.getElementById('valor2').value;

    resultado.classList.remove('error');

    if (isNaN(value1) || isNaN(value2)) {
        resultado.classList.add('error');
        resultado.textContent = "Caracter no valido. Debes introducir solo números."
        alert("¡Error! Vuelve a intentarlo.");
    } else if (value1 <= 0 || value2 <= 0) {
        resultado.classList.add('error');
        resultado.textContent = "Debes introducir un número mayor a 0"
        alert("¡Error! Vuelve a intentarlo.");
    } else if (Number(value1) > Number(value2)) {
        resultado.textContent = `Resultado: ${value1} es mayor que ${value2}`;
    } else if (Number(value1) < Number(value2)) {
        resultado.textContent = `Resultado: ${value1} es menor que ${value2}`;
    } else if (Number(value1) === Number(value2)) {
        resultado.textContent = "Resultado: Son iguales"
    } else {
        resultado.textContent = "Ni puta idea"
    }
}

const boton = document.getElementById('boton');
boton.addEventListener('click', determinarMayor);

