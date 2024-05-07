function anhadir() {
    // Obtenemos las dos listas
    const lista1 = document.getElementById("candidatos");
    const lista2 = document.getElementById("elegidos");
    /* La propiedad selectedIndex devuelve el índice (posición) del elemento seleccionado
    en la lista, siendo 0 la primera. Si es -1, es que no hay ningún elemento seleccionado*/
    if(lista1.selectedIndex != -1){ // != es distinto
        // options es un array con los elementos de la lista
        // con appendChild añadimos el elemento como hijo a la segunda lista
        lista2.appendChild(lista1.options[lista1.selectedIndex]);
        // Eliminamos el elemento seleccionado de la primera lista con el método remove
        lista1.remove(lista1.selectedIndex);
    } else {
        window.alert("Debes seleccionar un elemento de la lista de candidatos");
    }
}

function quitar() {
    // Este código es como la función añadir, pero cambiando lista1 por lista2 y viceversa
    const lista1 = document.getElementById("candidatos");
    const lista2 = document.getElementById("elegidos");
    if(lista2.selectedIndex != -1){
        lista1.appendChild(lista2.options[lista2.selectedIndex]);
        lista2.remove(lista2.selectedIndex);
    } else {
        window.alert("Debes seleccionar un elemento de la lista de elegidos");
    }
}

// Nos suscribimos a los eventos click en ambos botones
document.getElementById("anhadir").addEventListener("click", anhadir);
document.getElementById("quitar").addEventListener("click", quitar);
