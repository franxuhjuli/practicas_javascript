const resultado = document.getElementById('resultado');

function mostrarNumeros() {
    let valueA = document.getElementById('valor1').value;
    let valueB = document.getElementById('valor2').value;
    let resto = Math.abs(valueA - valueB);
    console.log(resto);
    let numerosIntermedios = [];



    for (let i = 0; i === resto ; i++) {
        valueA += 1;
        console.log(valueA);
        numerosIntermedios.push(valueA);
    }

    console.log(numerosIntermedios);
    resultado.textContent = numerosIntermedios.sort();
}




const boton = document.getElementById('boton');
boton.addEventListener('click', mostrarNumeros);


