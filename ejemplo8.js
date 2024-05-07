function calcular() {
    const radioTriangulo = document.getElementById("radioTriangulo");
    const radioRectangulo = document.getElementById("radioRectangulo");
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    const area = document.getElementById("area");

    if(radioTriangulo.checked == true) {
       area.value = base * altura / 2;
    } else if(radioRectangulo.checked == true) {
        area.value = base * altura;
    } else {
        window.alert("Debes elegir alguna de las opciones");
    }
}
document.getElementById("btnCalcular").addEventListener("click", calcular);