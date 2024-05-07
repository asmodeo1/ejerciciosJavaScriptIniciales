function calcularSigno() {
    // Obtenemos los dos cuadros de texto
    const numero = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    /* Con parseInt convertimos el valor que hay en el cuadro de texto en número, pues
    lo que se escribe en un cuadro de texto siempre es texto.
    Luego comprobamos que sea un entero (sin decimales) usando isNaN con number y parseInt. */
    if(isNaN(Number(numero.value)) || isNaN(parseInt(numero.value))) {
        resultado.value = "Debes escribir un número";
        // Las dos siguientes instrucciones para una mejor usabilidad
        // Le damos el foco al número
        numero.focus();
        // Seleccionamos todo lo que haya escrito en el número
        numero.select();
        /* Con return salimos de la función sin ejecutar las líneas siguientes que haya.
        Así nos evitamos el else */
        return;
    }
    if (numero.value > 0) {
        resultado.value = "Es positivo";
    } else if (numero.value < 0) {
        resultado.value = "Es negativo";
    } else {
        resultado.value = "Es cero";
    }
}

function calcularPar() {
    const numero = document.getElementById("numero");
    const resultado = document.getElementById("resultado");

    if (Number.isInteger(parseInt(numero.value)) == false) {
        resultado.value = "Debes escribir un número";
        numero.focus();
        numero.select();
        return;
    }
    /* Un número es par si el resto de dividirlo entre 2 es cero. Por ello usamos el
    operador % que devuelve el resto de una división */
    if (numero.value % 2 == 0) {
        resultado.value = "Es par";
    } else {
        resultado.value = "Es impar";
    }
    /* Se puede usar el operador ternario ? para poner el if anterior en una sola línea.
    Su sintaxis es condición?expresiónSi:expresiónNo
    resultado.value = numero.value % 2 == 0 ? "Es par" : "Es impar"; */

    /* En lugar de comprobar si el valor es false, podemos usar ! que niega la condición.
    Se leería como si no es entero .... 
    if(!Number.isInteger(parseInt(numero.value))) {
        // El resto tal como antes con lo que no lo ponemos
    */

    /* En lugar de usar returns, podemos usar elses 
    if(Number.isInteger(parseInt(numero.value)) == false) {
         resultado.value = "Debes escribir un número";
     } else {
 
         if (numero.value % 2 == 0) {
             resultado.value = "Es par"; 
         } else {
             resultado.value = "Es impar";
         }
     }*/
}

// El valor absoluto de un número es el número sin signo 
function calcularAbsoluto() {
    const numero = document.getElementById("numero");
    const resultado = document.getElementById("resultado");

    if (Number.isInteger(parseInt(numero.value)) == false) {
        resultado.value = "Debes escribir un número";
        numero.focus();
        numero.select();
        return;
    }

    if(numero.value < 0) {
        resultado.value = numero.value * -1;
        // O
        // resultado.value = -numero.value;
    } else {
        resultado.value = numero.value;
    }
}

function calcularCuadrado() {
    const numero = document.getElementById("numero");
    const resultado = document.getElementById("resultado");

    if (Number.isInteger(parseInt(numero.value)) == false) {
        resultado.value = "Debes escribir un número";
        numero.focus();
        numero.select();
        return;
    }

    resultado.value = numero.value * numero.value;
}

/* Al comenzar debemos poner los listeners (escuchadores) a los elementos
deseados; en nuestro caso cuando se haga click en cada uno de los dos botones */
const signo = document.getElementById("signo");
signo.addEventListener("click", calcularSigno);
// Una manera más corta pues no vamos a usar signo para nada más en este código
//document.getElementById("signo").addEventListener("click", calcularSigno);
const par = document.getElementById("par");
par.addEventListener("click", calcularPar);
const valorAbsoluto = document.getElementById("valorAbsoluto");
valorAbsoluto.addEventListener("click", calcularAbsoluto);
const cuadrado = document.getElementById("cuadrado");
cuadrado.addEventListener("click", calcularCuadrado);

