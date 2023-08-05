const resultado = document.getElementById('resultado');
const boton = document.getElementById('boton');

function calcularNumerosIntermedios() {
    let valueA = document.getElementById('valor1').value;
    let valueB = document.getElementById('valor2').value;
    let resto = Math.abs(valueA - valueB);
    let numerosIntermedios = [];

    if (valueA === valueB) {
        resultado.textContent = "Los numeros son iguales";
    } else {
        for (let i = resto - 1; i !== 0; i--) {
            if (valueA < valueB) {
                valueA++
                numerosIntermedios.push(valueA);
            } else {
                valueB++
                numerosIntermedios.push(valueB);
            }
        }
        resultado.textContent = `Resultado: ${numerosIntermedios.join(', ')}.`;
    }
}

boton.addEventListener('click', calcularNumerosIntermedios);


