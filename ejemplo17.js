function saludar() {
    const nombre = document.getElementById("nombre");
    if (nombre.value.trim() == "") {
        window.alert("Falta el nombre");
        nombre.focus();
        nombre.select();
    } else {
        window.alert("Hola " + nombre.value.trim());
    }
}

document.getElementById("saludar").addEventListener("click", saludar);