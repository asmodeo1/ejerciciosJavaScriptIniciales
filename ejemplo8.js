function calcular() {
    // Obtenemos los dos input radio
    const radioTriangulo = document.getElementById("radioTriangulo");
    const radioRectangulo = document.getElementById("radioRectangulo");
    // Obtenemos los valores de base y altura, no los input
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    // En este ejercicio no comprobamos si la bse y altura son números, cosa que hicimos en el ejemplo7
    // Obtenemos el input del area
    const area = document.getElementById("area");
    // Vemos si está marcado el radio del triángulo con su propiedad checked
    if(radioTriangulo.checked == true) {
        // Calcular el área y la mostramos en el input usando su propiedad value
       area.value = base * altura / 2;
    } else if(radioRectangulo.checked == true) {
        area.value = base * altura;
    } else {
        // Si no marcó ninguno de los radios mostramos un mensaje de aviso.
        // También podemos poner alert("Debes elegir alguna de las opciones");
        window.alert("Debes elegir alguna de las opciones");
    }
}

// Nos suscribimos al evento clic del botón
document.getElementById("btnCalcular").addEventListener("click", calcular);
