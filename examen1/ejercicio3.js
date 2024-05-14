function ponerSepia() {
    const foto = document.getElementById("foto");
    foto.style.filter = "sepia()";
    // En una sola línea:
    // document.getElementById("foto").style.filter = "sepia()";
}

function ponerNormal() {
    document.getElementById("foto").style.filter = "";
}

function ponerDifuminado() {
    document.getElementById("foto").style.filter = "blur(10px)";
}

function ponerInvertir() {
    document.getElementById("foto").style.filter = "invert()";
}

function ponerGrises() {
    document.getElementById("foto").style.filter = "grayscale()";
}

document.getElementById("normal").addEventListener("change", ponerNormal);
document.getElementById("sepia").addEventListener("change", ponerSepia);
document.getElementById("difuminar").addEventListener("change", ponerDifuminado);
document.getElementById("invertir").addEventListener("change", ponerInvertir);
document.getElementById("grises").addEventListener("change", ponerGrises);
