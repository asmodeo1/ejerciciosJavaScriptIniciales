function cambiar() {
    // Con la propiedad checked comprobamos si el radio está marcado
    if(document.getElementById("ingles").checked) {
        /* Usamos la clase de Bootstrap d-none (display: none) para mostrar
        u ocultar el párrafo correspondiente. Con add le añadimos la clase, con
        lo cual se oculta; con remove se la quitamos, con lo cual se muestra */
        document.getElementById("textoCastellano").classList.add("d-none");
        document.getElementById("textoIngles").classList.remove("d-none");
    } else {
        document.getElementById("textoCastellano").classList.remove("d-none");
        document.getElementById("textoIngles").classList.add("d-none");
    }
}

// Nos suscribimos al evento click del botón
document.getElementById("cambiar").addEventListener("click", cambiar);
   

