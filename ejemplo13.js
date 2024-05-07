
function rgb(rojo, verde, azul) {
    return `rgb(${rojo}, ${verde}, ${azul}`;
}
function cambiar() {
    document.getElementById("texto").style.color = 
    rgb(document.getElementById("rojo").value,
    document.getElementById("verde").value, 
    document.getElementById("azul").value);
}
document.getElementById("rojo").addEventListener("input", cambiar);
document.getElementById("verde").addEventListener("input", cambiar);
document.getElementById("azul").addEventListener("input", cambiar);


