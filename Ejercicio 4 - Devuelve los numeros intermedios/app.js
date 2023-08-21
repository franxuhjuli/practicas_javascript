const resultado = document.getElementById("resultado");
const boton = document.getElementById("boton");

function calcularNumerosIntermedios() {
  let valueA = document.getElementById("valor1").value;
  let valueB = document.getElementById("valor2").value;
  let resto = Math.abs(valueA - valueB);

  let numerosIntermedios = [];

  if (valueA === valueB) {
    resultado.textContent = "Los numeros son iguales";
  } else if (
    Number(valueA) + 1 === Number(valueB) ||
    Number(valueA) - 1 === Number(valueB)
  ) {
    resultado.textContent = "Los numeros son contiguos";
  } else {
    for (let i = resto - 1; i !== 0; i--) {
      if (Number(valueA) < Number(valueB)) {
        valueA++;
        numerosIntermedios.push(valueA);
      } else if (Number(valueB) < Number(valueA)) {
        valueB++;
        numerosIntermedios.push(valueB);
      }
    }
    resultado.textContent = `Resultado: ${numerosIntermedios.join(", ")}.`;

    //Crear boton para calcular solo impares
    if (document.querySelector(".impares") == null) {
      const botonImpares = document.createElement("button");
      document
        .querySelector(".container")
        .insertBefore(botonImpares, resultado);
      botonImpares.textContent = "Solo impares";
      botonImpares.classList.add("impares");
      botonImpares.addEventListener("click", calcularImpares);
    }
  }

  function calcularImpares() {
    function esImpar(value) {
      return value % 2 == 1;
    }

    resultado.textContent = `Resultado(impares): ${numerosIntermedios
      .filter(esImpar)
      .join(", ")}.`;
    document.querySelector(".impares").remove();
  }
}

boton.addEventListener("click", calcularNumerosIntermedios);
