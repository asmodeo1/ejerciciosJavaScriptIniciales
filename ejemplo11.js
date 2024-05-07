function calcular() {
    const importe = document.getElementById("importe").value;
    const cantidad = document.getElementById("cantidad").value;
    if(isNaN(Number(importe)) || isNaN(parseFloat(importe))) {
        window.alert("El importe es incorrecto");
        return;
    }
    if(isNaN(Number(cantidad)) || isNaN(parseInt(cantidad))) {
        window.alert("La cantidad es incorrecta");
        return;
    }
    const ivaElegido = document.getElementById("ivas").value;
    const iva = document.getElementById("iva");
    iva.value = importe * cantidad * ivaElegido / 100;
    const total = document.getElementById("total");
    total.value = importe * cantidad + importe * cantidad * ivaElegido / 100
}

document.getElementById("calcular").addEventListener("click", calcular);