const boton = document.getElementById("boton");
const tabla = document.getElementById("tabla");

function calcularTabla() {
  // Limpìar tabla
  tabla.innerHTML = "";

  // Obtener Numero
  let numeroInput = document.getElementById("number");
  let valor = numeroInput.value;
  let numero = Number(valor);

  // Calcular la tabla
  for (i = 1; i <= 10; i++) {
    let resultado = i * numero;

    // Crear tabla en el DOM
    let itemLista = document.createElement("li");
    itemLista.textContent = numero + " X " + i + " = " + resultado;
    tabla.appendChild(itemLista);
  }
}

boton.addEventListener("click", calcularTabla);
