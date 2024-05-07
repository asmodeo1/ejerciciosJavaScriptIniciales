function cambiarTamanho(e) {
    document.getElementById("numeroTamanho").innerText = e.target.value;
    document.getElementById("texto").style.fontSize = e.target.value + "rem";
}

function cambiarColor(e) {
    document.getElementById("texto").style.color = e.target.value;
}

function cambiarNegrita(e) {
    if (e.target.checked) {
        document.getElementById("texto").style.fontWeight = "bold";
    } else {
        document.getElementById("texto").style.fontWeight = "normal";
    }
}

function cambiarCursiva(e) {
    if (e.target.checked) {
        document.getElementById("texto").style.fontStyle = "italic";
    } else {
        document.getElementById("texto").style.fontStyle = "normal";
    }
}

function cambiarFuente(e) {
    if(e.target.value != "") {
        document.getElementById("texto").style.fontFamily = e.target.value;
    }
}

document.getElementById("tamanho").addEventListener("input", cambiarTamanho);
document.getElementById("color").addEventListener("change", cambiarColor);
document.getElementById("negrita").addEventListener("change", cambiarNegrita);
document.getElementById("cursiva").addEventListener("change", cambiarCursiva);
document.getElementById("fuente").addEventListener("change", cambiarFuente);


