function mostrar() {
    // Obtenemos los valores seleccionados en ambas listas usando la propiedad value
    const local = document.getElementById("local").value;
    const visitante = document.getElementById("visitante").value;
    // Obtenemos el parrafo partido
    const partido = document.getElementById("partido");
    // Comprobamos si el equipo local seleccionado es el mismo que el visitante
    if(local == visitante) {
        // También podemos usar innerText en lugar de textContent, pero no es la forma estándar
        partido.textContent = "Debes elegir equipos diferentes";
    } else {
        partido.textContent = local + " - " + visitante;
    }
}

// Nos suscribimos al evento click del botón
document.getElementById("mostrar").addEventListener("click", mostrar);

