function visitar() {
    const mayor = document.getElementById("mayor");
    // Con la propiedad checked comprobamos si la casilla esta marcada
    if(mayor.checked) {
        /* Con esto vamos a otra página web. No olvidaros de poner http:// o https:// si es
        una página de otro sitio */
        window.location.href = "http://www.google.com"
    } else {
        /* El texto que meustar el mensaje de que debe marcar la casilla está oculto
        gracias a usar la clase invisible de Bootstrap. Con classList.remove se la quitamos */
        document.getElementById("mensaje").classList.remove("invisible");
    }
}

// Nos suscribimos al evento click del botón
document.getElementById("acceder").addEventListener("click", visitar);
