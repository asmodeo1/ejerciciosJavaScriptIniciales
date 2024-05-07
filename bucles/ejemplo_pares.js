function mostrar() {
    // Obtenemos el control numero y el párrafo datos
    const numero = document.getElementById("numero");
    const datos =  document.getElementById("datos");
    // Comprobamos que el número sea un número entero válido
    if(isNaN(Number(numero.value)) || isNaN(parseInt(numero.value))) { 
        alert("No es un número");
        numero.focus(); // Le damos el foco al control
        // Seleccionamos el texto que hubiese; en este caso solo espacios
        numero.select(); 
        return;
    }
     /* Eliminamos todo el contenido del párrafo. También podemos usar:
    - datos.innerText = ""; // No es estándar pero la soportan todos los navegadores desde hace años
    - datos.innerHTML = ""; // Pensada para añadir etiquetas de forma fácil */
    datos.textContent = "";
    /* La manera más sencilla es realizar un bucle desde 0 al número introducido e ir
    incrementando el contador de 2 en 2 */
    for(let i = 0; i <= numero.value; i+=2) { // Podemos usar i = i + 2 en lugar de i+=2
        // Creamos un nodo de tipo span
        const span = document.createElement("span");
        // Creamos un nodo de tipo texto con el número 0, luego 2, luego 4, ...
        const texto = document.createTextNode(i);
        // Añadimos el texto al span
        span.appendChild(texto);
        // Añadimos el span al párrafo de datos
        datos.appendChild(span);
    }
    // Otra manera: vamos de 1 en 1 y luego comprobamos si cada uno es divisible por 2
    /*for(let i = 0; i <= numero.value; i++) {
        // Un número es par si es divisble por 2, es decir, si el resto es 0
        // El operador % realiza una división y devuelve el resto de esta
        if(numero % 2 == 0) { 
            const span = document.createElement("span");
            const texto = document.createTextNode(i);
            span.appendChild(texto);
            datos.appendChild(span);
        }
    }*/
}

/* Si queremos que el cursor esté parpadeando en el cuadro del número, podemos darle
el foco al ejecutar JavaScript. El problema de esto es que, si tarda un poco en cargar
el JavaScript, peude que el usuario ya le hubiese dado el foco a otro control, con lo
que le saltaría al nuestro. */
document.getElementById("numero").focus();
document.getElementById("mostrar").addEventListener("click", mostrar);

