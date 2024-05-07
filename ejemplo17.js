function saludar() {
    // Obtenemos el control del input nombre
    const nombre = document.getElementById("nombre");
    /* Queremos mostrar un mensaje de advertencia si falta el nombre.
    Para ello podríamos usar if (nombre.value == "") { pero esto permite que el usuario
    escriba varios espacios, pues no es lo mimo espacios que la cadena vacía.
    Usando el método trim se quitan los espacios que haya a la derecha e izquierda del texto.
    Así, tanto si el usuario no escribe nada como si solo pone espacios, se mostrará el
    mensaje de Falta el nombre. Trim también es útil para asegurarse que el usuario no deja
    espacios antes o después de meter datos ya que no tiene sentido guardarlos en una base
    de datos o mostrarlos por pantalla. */
    if (nombre.value.trim() == "") {
        window.alert("Falta el nombre");
        nombre.focus(); // Le damos el foco al control
        // Seleccionamos el texto que hubiese; en este caso solo espacios
        nombre.select(); 
    } else {
        // Volvemos a realizar el trim para quitar esos posibles espacios a los lados
        window.alert("Hola " + nombre.value.trim());
    }
}

// Nos suscribimos al evento click del botón
document.getElementById("saludar").addEventListener("click", saludar);