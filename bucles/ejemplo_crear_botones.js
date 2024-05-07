/* Todas las funciones que usamos para "escuchar" eventos reciben un parámetro
con la información del evento (qué tecla se pulsó, qué botón del ratón se pulsó, en
qué coordenadas, ...). JavaScript permite no ponerlo entre paréntesis si no lo vamos a
usar, algo que hemos hecho hasta ahora en nuestros ejercicios. 
Pero en este nos vale para saber que botón se pulsó, pues todos ejecutan la misma
función mostrar.
A este parámetro se le suele llama e, evt o evento, pero puede ser cualquier otra
*/
function mostrar(evt) {
    // Por si queremos ver toda la información del evento en la consola
    console.log(evt);
    /* La propiedad currentTarget contiene el nodo sobre el que se ha producido el
    evento, en este caso click.
    Gracias a ello ponemos en rojo el botón pulsado */
    evt.currentTarget.style.backgroundColor = "red";
}

// Vamos a añadir los 10 botones en el contenedor
const contenedor = document.getElementById("contenedor");
for (let i = 1; i <= 10; i++) {
    /* Al crear el elemento solo podemos incluir la etiqueta, por ello debemos añadir luego
    los atributos */
    const boton = document.createElement("input");
    // Añadimos el atributo type="button"
    boton.setAttribute("type", "button");
    /* También podríamos usar lo siguiente, pero lo anterior es más recomendable 
    boton.type = "button"; */
    // Añadimos el atributo value="botón número"
    boton.setAttribute("value", "botón " + i); // o boton.value = "boton " + i;
    // Añadimos estas tres clases de Bootstrap
    boton.classList.add("btn", "btn-info", "m-3");
    // Podemos añadirlas de una en una
    //boton.classList.add("btn");
    //boton.classList.add("btn-info");
    //boton.classList.add("m-3");
    // Queremos que se ejecute la función mostrar cuando se haga click en cada botón
    boton.addEventListener("click", mostrar);
    contenedor.appendChild(boton);
}