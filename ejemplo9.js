function cambiarTamanho() {
    // Cogemos el valor actual del input range
    const tamanho = document.getElementById("tamanho").value;
    // No olvidarse de añadir rem, em, px, ... al número del tamaño
    document.getElementById("texto").style.fontSize = tamanho + "rem";
    document.getElementById("numeroTamanho").textContent = tamanho;
}

function cambiarColor() {
    // En este caso no usamos constantes y usamos directamente los elementos
    document.getElementById("texto").style.color = document.getElementById("color").value;
}

function cambiarNegrita() {
    // Con la propiedad checked sabemos si está marcada o no la casilla.
    // Podríamos poner == true pero no es necesario
    if (document.getElementById("negrita").checked) {
        document.getElementById("texto").style.fontWeight = "bold";
    } else {
        document.getElementById("texto").style.fontWeight = "normal";
    }
}

function cambiarCursiva() {
     // Con la propiedad checked sabemos si está marcada o no la casilla.
    // Podríamos poner == true pero no es necesario
    if (document.getElementById("cursiva").checked) {
        document.getElementById("texto").style.fontStyle = "italic";
    } else {
        document.getElementById("texto").style.fontStyle = "normal";
    }
}

function cambiarFuente(e) {
    // Cogemos el tipo de fuente seleccionado en la lista
    const fuente = document.getElementById("fuente").value;
    /* En el HTML le pusimos el atributo value="" a la primera opción del select, que
    ponía Seleccionar. Como ese no es un tipo de letra válido, si el valor es "", es
    que no se se ha seleccionado una fuente */
    if(fuente != "") { // != es distinto
        document.getElementById("texto").style.fontFamily = fuente;
    }
}

// El evento input se prodice según va moviendo el usuario el "marcador" del control range
document.getElementById("tamanho").addEventListener("input", cambiarTamanho);
// Los eventos change se produce cuando elegimos otro valor
document.getElementById("color").addEventListener("change", cambiarColor);
document.getElementById("negrita").addEventListener("change", cambiarNegrita);
document.getElementById("cursiva").addEventListener("change", cambiarCursiva);
document.getElementById("fuente").addEventListener("change", cambiarFuente);
