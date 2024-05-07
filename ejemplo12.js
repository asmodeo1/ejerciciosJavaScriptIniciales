function ponerRojo() {
    document.getElementById("texto").style.color = "red";
}

function ponerVerde() {
    document.getElementById("texto").style.color = "green";
}

function ponerAzul() {
    document.getElementById("texto").style.color = "blue";
}

// Nos suscribimos a los clic de cada botón, cada uno a una función diferente, pues
// hacen cosas distintas
document.getElementById("rojo").addEventListener("click", ponerRojo);
document.getElementById("verde").addEventListener("click", ponerVerde);
document.getElementById("azul").addEventListener("click", ponerAzul);
