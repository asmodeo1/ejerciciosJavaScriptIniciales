function calcular() {
    const importe = document.getElementById("importe").value;
    if(isNaN(Number(importe)) || isNaN(parseFloat(importe))) {
        window.alert("El importe es incorrecto");
        return;
    }
    let descuento = 0;
    if(document.getElementById("jubilado").checked) {
        descuento = importe * 10 / 100;
    }
    if(document.getElementById("idaVuelta").checked) {
        descuento += importe * 5 / 100;
    }
    if(document.getElementById("vip").checked) {
        descuento += importe * 7 / 100;
    }     
    document.getElementById("descuentos").value = descuento; 
    document.getElementById("total").value = importe - descuento; 
}
document.getElementById("calcular").addEventListener("click", calcular);