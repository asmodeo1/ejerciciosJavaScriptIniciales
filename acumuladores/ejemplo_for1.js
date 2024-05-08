
function sumar() {
    const valor = document.getElementById("valor");
    const suma = document.getElementById("suma");
    if(isNaN(Number(valor.value)) || isNaN(parseFloat(valor.value))) { 
        alert("No es un número");
        valor.focus();
        valor.select();
        return;
    }
    /* No tiene por que ser una variale global, pues cada vez que pulsemos el bortón sumar
    la suma debe comenzar de nuevo */

    let total = 0;

    /* Tenemos que hacer varias sumas, es decir, un bucle. Cuando se vaya a ejecutar esta
    línea ya sabemos cuantas veces, pues el usuario ha introducido un número en el cuadro
    de texto.
    Por ello lo mejor es usar un for donde tendremos tres partes separadas por ;
    - valor inicial del contador. Cuando no tiene un nombre específico se le suele llamar i
    - condición que se debe cumplir para que se siga ejecutando el bucle (un mientras). En 
    este caso, mientras i sea menor o igual al número introducido por el usuario
    - el incremento o decremento del contador, en este caso de 1 en 1, pues queremos sumar
    1, luego 2, luego 3, .... */
    for(let i = 1; i <= valor.value; i++) {
        total = total + i; // Vamos acumulando la suma
    }
    // Si queremso poner un separador de miles, podemos usar esto:
    suma.value = new Intl.NumberFormat().format(total);

    valor.focus();
    valor.select();
}

function borrar(){
    const valor = document.getElementById("valor");
    valor.value = "";
    valor.focus();
    document.getElementById("suma").value = 0;
}


document.getElementById("sumar").addEventListener("click", sumar);
// También se puede poner de esta forma
//document.getElementById("sumar").onclick = sumar;
document.getElementById("borrar").addEventListener("click", borrar);
//document.getElementById("borrar").onclick = borrar;

