function convertirCm() {
    const centimetros =  document.getElementById("centimetros");
    if(isNaN(Number(centimetros.value)) || isNaN(parseFloat(centimetros.value))) {
        window.alert("Los centímetros no son válidos");
        centimetros.focus(); // Le damos el foco
        centimetros.select(); // Seleccionamos lo que haya escrito
        return;
    }
    const pulgadas = document.getElementById("pulgadas");
    pulgadas.value = centimetros.value / 2.54;
}

function convertirPulgadas() {
    const pulgadas =  document.getElementById("pulgadas");
    if(isNaN(Number(pulgadas.value)) || isNaN(parseFloat(pulgadas.value))) {
        window.alert("Las pulgadas no son válidos");
        pulgadas.focus();
        pulgadas.select();
        return;
    }
    const centimetros = document.getElementById("centimetros");
    centimetros.value = pulgadas.value * 2.54;
}

document.getElementById("cmPulgadas").addEventListener("click", convertirCm);
document.getElementById("pulgadasCm").addEventListener("click", convertirPulgadas);
