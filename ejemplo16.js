function mostrar() {
    const local = document.getElementById("local").value;
    const visitante = document.getElementById("visitante").value;
    const partido = document.getElementById("partido");
    if(local == visitante) {
        partido.textContent = "Debes elegir equipos diferentes";
    } else {
        partido.textContent = local + " - " + visitante;
        //document.getElementById("partido").textContent = local + " - " + visitante;
    }

}

document.getElementById("mostrar").addEventListener("click", mostrar);

