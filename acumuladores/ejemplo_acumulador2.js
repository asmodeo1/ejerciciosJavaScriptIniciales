/* Como tenemos que llevar la suma y la cuenta mientras esté
cargada la página, los definimos como variables globales ya que, si los definimos
dentro de la función comprobar, cada vez que se pulsase el botón se volverían a crear 
con lo que no se irían contando ni acumulando los importes */
let acumulador = 0;
let contador = 0;

function acumular() {
    const importe = document.getElementById("importe");
    const total = document.getElementById("total");
    const cuadroContador = document.getElementById("contador");
    if(isNaN(Number(importe.value)) || isNaN(parseFloat(importe.value))) {
        window.alert("El importe no es correcto");
        importe.focus();
        importe.select();
        return;
    }
    acumulador = acumulador + parseFloat(importe.value);
    // También se puede hacer así:
    // acumulador += parseFloat(importe.value);
    total.value = acumulador;
    contador = contador + 1;
    // También se puede hacer así:
    // contador += 1;
    // contador++;
    cuadroContador.value = contador;
    importe.focus();
    importe.value = "";
}

function borrar() {
    const total = document.getElementById("total");
    const cuadroContador = document.getElementById("contador");
    // Además de mostrar cero en los input, debemos poner el acumulador y el contador a cero
    total.value = 0;
    contador = 0;
    cuadroContador.value = 0;
    acumulador = 0;
    importe.focus();
    importe.value = "";
}


document.getElementById("guardar").addEventListener("click", acumular);
document.getElementById("borrar").addEventListener("click", borrar);
