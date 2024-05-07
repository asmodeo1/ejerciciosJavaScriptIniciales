function cambiar() {
    if(document.getElementById("ingles").checked) {
        document.getElementById("textoCastellano").classList.add("d-none");
        document.getElementById("textoIngles").classList.remove("d-none");
    } else {
        document.getElementById("textoCastellano").classList.remove("d-none");
        document.getElementById("textoIngles").classList.add("d-none");
    }
}
document.getElementById("cambiar").addEventListener("click", cambiar);
   

