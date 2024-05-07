function calcular() {
    // Cogemos los valores en los controles importe y cantidad
    const importe = document.getElementById("importe").value;
    const cantidad = document.getElementById("cantidad").value;
    // Comprobamos si importe es un número con o sin decimales
    if(isNaN(Number(importe)) || isNaN(parseFloat(importe))) {
        window.alert("El importe es incorrecto");
        return;
    }
    // Comprobamos si cantidad es un número entero (sin decimales)
    if(isNaN(Number(cantidad)) || isNaN(parseInt(cantidad))) {
        window.alert("La cantidad es incorrecta");
        return;
    }
    // Obtebemos el elemento seleccionado en la lista de IVAs
    const ivaElegido = document.getElementById("ivas").value;
    const iva = document.getElementById("iva");
    // Calculamos el IVA y lo guardamos en el cuadro de IVA
    iva.value = importe * cantidad * ivaElegido / 100;
    const total = document.getElementById("total");
    // Calculamos el total y lo guardamos en el cuadro de total
    total.value = importe * cantidad + importe * cantidad * ivaElegido / 100
}

// Nos suscribimos a los eventos click del botón calcular
document.getElementById("calcular").addEventListener("click", calcular);