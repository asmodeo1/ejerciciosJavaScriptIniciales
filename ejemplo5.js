function comprobarNota() {
    /* Con getElementById obtenemos el elemento entero (con su color, tamaño, posicionamiento, ...).
    Luego deberemos usar su propiedad value para obtener el valor que contienen */
    const nota = document.getElementById("nota");
    const resultado = document.getElementById("resultado");
    // > (mayor) < (menor) >= (mayor o igual) <= (menor o igual)
    // != (distinto) == (igual), === (igual estricto) !== (distinto estricto)
    if (nota.value == "") {
        // Cambiamos el texto del párrafo
        resultado.textContent = "Debes introducir la nota";
        // Los ponemos en negro pues puede haber quedado en verde o rojo de otra nota 
        resultado.style.color = "black";
        nota.style.color = "black";
        // Le damos el foco a la nota
        nota.focus();
    } else {
        /* Si la nota es menor que 0 o mayor que 10 no la admitimos.
        Si el if tiene más de una condición debemos unirlas por un && (y) o un || (o).
        Se debe usar un O pues la nota no puede ser menor que cero y mayor que 10
        al mismo tiempo.
        */
        if (nota.value < 0 || nota.value > 10 ) {
            resultado.textContent = "La nota debe estar entre 0 y 10";
            /* Usaremos los valores de CCS pero entre comillas */
            resultado.style.color = "black";
            nota.style.color = "black";
            nota.focus();
            // Seleccionamos todo el texto de la nota
            nota.select();
        } else {
            if (nota.value >= 5) {
                /* nota.value debe ir fuera de las comillas pues sino escribiría 
                nota.value tal cual y no la nota. Por ello debemos unir los dos
                "trozos" con el operador +, que en este caso sirve para concatenar
                valores. */
                resultado.textContent = "Está aprobado 🙂 con un " + nota.value;
                resultado.style.color = "green";
                nota.style.color = "green";
            } else {
                resultado.textContent = "Está suspenso 😭 con un " + nota.value;
                resultado.style.color = "red";
                nota.style.color = "red";
            }
        }
    }
}

/* Obtenemos el botón y le añadimos el listener click, para realizar algo */
const comprobar = document.getElementById("comprobar");
comprobar.addEventListener("click", comprobarNota);
