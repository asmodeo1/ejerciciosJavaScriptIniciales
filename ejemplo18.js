function calcular() {
    // Obtenemos el valor del importe introducido
    const importe = document.getElementById("importe").value;
    // Comprobamos que sea un número entero o con decimales
    if(isNaN(Number(importe)) || isNaN(parseFloat(importe))) {
        window.alert("El importe es incorrecto");
        return;
    }
    /* Como el usuario puede marcar varios descuentos, debemos calcular la suma
    de todos ellos. Para ello creamos una variable donde iremos acumulándolos. Por
    ello debe comenzar en cero; así, si no hay ningún descuento, mostraremos ese
    0 en el cuadro de texto del descuento */
    let descuento = 0;
    /* Si está marcado el descuento de jubilado, guardamos en la variable descuento 
    el descuento calculado */
    if(document.getElementById("jubilado").checked) {
        descuento = importe * 10 / 100;
    }
    /* Hacemos lo mismo con el descuento de ida y vuelta, pero en ese caso debemos
    guardar el nuevo descuento calculado junto con el anterior. Para ello debemos
    sumar el descuento existente con el nuevo */
    if(document.getElementById("idaVuelta").checked) {
        descuento = descuento + importe * 5 / 100;
        /* Podemos usar el operador reducido +=
        descuento += importe * 5 / 100; */

    }
    // Lo mismo con el descuento vip
    if(document.getElementById("vip").checked) {
        descuento += importe * 7 / 100;
    }  
    // Mostramos el descuento y el total en sus cuadros correspondientes   
    document.getElementById("descuentos").value = descuento; 
    document.getElementById("total").value = importe - descuento; 
}

// Nos suscribimos al evento click del botón
document.getElementById("calcular").addEventListener("click", calcular);
