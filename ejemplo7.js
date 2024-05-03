function calcularAreaRectangulo() {
    // Obtenemos los tres cuadros de texto
    const base = document.getElementById("base");
    const altura = document.getElementById("altura");
    const area = document.getElementById("area");

     /* Con parseInt convertimos el valor que hay en el cuadro de texto en número, pues
    lo que se escribe en un cuadro de texto siempre es texto.
    Luego comprobamos que sea un entero (sin decimales) usando Number.isInteger.
    No podemos hacer directamente Number.isInteger(numero.value) pues daría siempre false
    pues, como hemos dicho, el valor de un cuadro de texto es texto. */
    if (Number.isInteger(parseInt(base.value)) == false) {
        area.value = "Debes escribir un número en la base";
        // Las dos siguientes instrucciones para una mejor usabilidad
        // Le damos el foco al número
        numero.focus();
        // Seleccionamos todo lo que haya escrito en el número
        numero.select();
        /* Con return salimos de la función sin ejecutar las líneas siguientes que haya.
        Así nos evitamos el else */
        return;
    }
    if (Number.isInteger(parseInt(altura.value)) == false) {
        area.value = "Debes escribir un número en la altura";
        altura.focus();
        altura.select();
        return;
    }
    // Calculamos el área del rectángulo y la mostramos en el cuado del área

    area.value = base.value * altura.value;
}

function calcularAreaTriangulo() {
    const base = document.getElementById("base");
    const altura = document.getElementById("altura");
    const area = document.getElementById("area");

    if (Number.isInteger(parseInt(base.value)) == false) {
        area.value = "Debes escribir un número en la base";
        base.focus();
        base.select();
        return;
    }
    if (Number.isInteger(parseInt(altura.value)) == false) {
        area.value = "Debes escribir un número en la altura";
        altura.focus();
        altura.select();
        return;
    }

    // Dos maneras más de escribir los if anteriores, usando else en lugar de return 
    /* if (Number.isInteger(parseInt(base.value)) == false) {
        area.value = "Debes escribir un número en la base";
        base.focus();
        base.select();
    } else if (Number.isInteger(parseInt(altura.value)) == false) {
        area.value = "Debes escribir un número en la altura";
        altura.focus();
        altura.select();
    } else {
        area.value = base.value * altura.value / 2;
    }*/

    /*
    if (Number.isInteger(parseInt(base.value)) == false) {
        area.value = "Debes escribir un número en la base";
        base.focus();
        base.select();
    } else {
        if (Number.isInteger(parseInt(altura.value)) == false) {
            area.value = "Debes escribir un número en la altura";
            altura.focus();
            altura.select();
        } else {
            area.value = base.value * altura.value / 2;
        }
    }*/

    area.value = base.value * altura.value / 2;
}

/* Al comenzar debemos poner los listeners (escuchadores) a los elementos
deseados; en nuestro caso cuando se haga click en cada uno de los dos botones */
const btnTriangulo = document.getElementById("btnTriangulo");
const btnRectangulo = document.getElementById("btnRectangulo");
btnTriangulo.addEventListener("click", calcularAreaTriangulo);
btnRectangulo.addEventListener("click", calcularAreaRectangulo);
