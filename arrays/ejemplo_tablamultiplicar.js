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

    /* Como tenemos que realizar 10 multiplicaciones para crear la tabla de multiplicar,
    usamos un bucle for "normal", comenzando en 1 y hasta 10 incluido */
    for (let i = 1; i < 11; i++) {
        // Creamos un nodo span
        const span = document.createElement("span");
        // Creamos un nodo de texto para que ponga algo como 3 * 1 = 3, 3 * 2 = 6, ...
        const texto = document.createTextNode(numero.value + " * " + i + " = " + numero.value * i);
        // Con plantillas de cadenas (llamada interpolación en otros lenguajes)
        //const texto = document.createTextNode(`${numero.value} * ${i} = ${numero.value * i}`);
        span.appendChild(texto);
        // En lugar de las dos líneas anteriores podemos usar solo esta
        // span.textContent = numero * i;
        // Añadimos el span al párrafo datos
        datos.appendChild(span);
    }
}

/* Si queremos que el cursor esté parpadeando en el cuadro del número, podemos darle
el foco al ejecutar JavaScript. El problema de esto es que, si tarda un poco en cargar
el JavaScript, peude que el usuario ya le hubiese dado el foco a otro control, con lo
que le saltaría al nuestro. */
document.getElementById("numero").focus();
document.getElementById("mostrar").addEventListener("click", mostrar);

