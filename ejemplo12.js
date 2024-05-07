function ponerRojo() {
    document.getElementById("texto").style.color = "red";
}

function ponerVerde() {
    document.getElementById("texto").style.color = "green";
}

function ponerAzul() {
    document.getElementById("texto").style.color = "blue";
}

document.getElementById("rojo").addEventListener("click", ponerRojo);
document.getElementById("verde").addEventListener("click", ponerVerde);
document.getElementById("azul").addEventListener("click", ponerAzul);
