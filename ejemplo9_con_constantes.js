function cambiarNegrita() {
   const negrita = document.getElementById("negrita").checked;
   // if(document.getElementById("negrita").checked == true) {
   if(negrita == true) { // if(negrita) {
    document.getElementById("texto").style.fontWeight = "bold";
   } else {
    document.getElementById("texto").style.fontWeight = "normal";
   }
   //document.getElementById("texto").style.fontWeight = document.getElementById("negrita").checked ? "bold" : "normal";
}

function cambiarCursiva() {
    const cursiva = document.getElementById("cursiva").checked;
    if(cursiva == true) { // if(cursiva) {
     document.getElementById("texto").style.fontStyle = "italic";
    } else {
     document.getElementById("texto").style.fontStyle = "normal";
    }
 }

 function cambiarColor() {
    const color = document.getElementById("color").value;
    document.getElementById("texto").style.color = color;
 }

 function cambiarFuente() {
    const fuente = document.getElementById("fuente").value;
    //if (document.getElementById("fuente").selectedIndex != 0) {
    if(fuente != "") {
        document.getElementById("texto").style.fontFamily = fuente;
    }
 }

 function cambiarTamanho() {
    const tamanho = document.getElementById("tamanho").value;
    document.getElementById("texto").style.fontSize = tamanho + "rem";
    document.getElementById("numeroTamanho").textContent = tamanho;
 }

document.getElementById("tamanho").addEventListener("input", cambiarTamanho);
document.getElementById("color").addEventListener("change", cambiarColor);
document.getElementById("negrita").addEventListener("change", cambiarNegrita);
document.getElementById("cursiva").addEventListener("change", cambiarCursiva);
document.getElementById("fuente").addEventListener("change", cambiarFuente);