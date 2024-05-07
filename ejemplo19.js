function anhadir() {
    const tarea = document.getElementById("tarea");
    /* Al igual que en el ejercicio 17, nos aseguramos con el método trim que el usuario no haya
    dejado en blanco o solo con espacios el nombre de la tarea */
    if(tarea.value.trim() != ""){
        const ul = document.getElementById("tareas");
        // Creamos un nuevo nodo de tipo li
        const nuevoLi = document.createElement("li")
        // Creamos un nuevo nodo de texto con el nombre de la tarea
        const texto = document.createTextNode(tarea.value);
        // Si no añadimos los nodos creados a algún elemento dentro del documento, se pierden
        // Añadimos el nodo texto al nuevo li
        nuevoLi.appendChild(texto);
        // Añadimos el nodo li a la lista
        ul.appendChild(nuevoLi);
        /* Por usubilidad borramos el texto de la tarea y le damos el foco para que el usuario
        pueda escribir la siguiente tarea */
        tarea.value = "";
        tarea.focus();
    } else {
        window.alert("La tarea no puede estar vacía");
    }
}

function vaciar() {
    // Eliminamos todo el contenido del ul, es decir, todos sus li
    document.getElementById("tareas").textContent ="";
}

// Nos suscribimos a los eventos click de los botones
document.getElementById("anhadir").addEventListener("click", anhadir);
document.getElementById("vaciar").addEventListener("click", vaciar);
