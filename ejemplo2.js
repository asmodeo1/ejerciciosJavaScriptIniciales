function calcularResultado() {
    // Obtenemos los elementos HTMK importe, cantidad y total (los cuadros de texto)
    const importe = document.getElementById("importe");
    const cantidad = document.getElementById("cantidad");
    const total = document.getElementById("total");
    /* importe y cantida se refieren a todo el cuadro de texto (su posición, tamaño, 
    color, tipo de letra, ...). Nosotros queremos el valor que contengan, lo que obtenemos
    con su propiedad value.
    value devuelve un tipo string (texto) pero JavaScript puede multiplicarlos sin problema */
    total.value = importe.value * cantidad.value;

    /* También podríamos haber obtenido directamente los value de importe y cantidad:
    const importe = document.getElementById("importe").value;
    const cantidad = document.getElementById("cantidad").value;
    // Del total necesitamos el cuadro entero, no su valor
    const total = document.getElementById("total");
    total.value = importe * cantidad;
    */

    /* O todo en una sola línea 
    document.getElementById("total").value = document.getElementById("importe").value 
        * document.getElementById("cantidad").value;
    */
}

// Obtenemos el botón HTML por su id
const boton = document.getElementById("calcular");
/* Le añadimos un listener (escuchador) cuando se haga clic
en el botón. Cuando se haga clic ejecutaremos la función calcularResultado */
boton.addEventListener("click", calcularResultado);

