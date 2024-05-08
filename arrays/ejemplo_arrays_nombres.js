/* Necesitamos guardar todos los nombres que el usuario añada. Por ello creamos
una variable global y de tipo array, pues queremos guardar los nombres por separado */
// Creamos un array vacío
let nombres = []; // Otra manera let nombres = new Array();
/* Creamos un contador para mostrar cuantos nombres hay añadidos. En realidad no
haría falta pues los arrays tienen una propiedad lenght que nos dan esa información */
let totalNombres = 0;

function guardar() {
    const nombre = document.getElementById("nombre");
    const total = document.getElementById("total");
    /* Con trim quitamos los espacios por la derecha e izquierda que pudiera haber escritos.
    ya que si el usuario escribe solo espacios los admitiría como nombre. */
    if(nombre.value.trim() == "") {
        //window.alert("Debes introducir el nombre");
        /* Como no le hemos dado un id a nuetsro div del mensaje, usamos el método
        getElementsByClassName para obtener el div que tiene esa clase aplicada.
        getElementsByClassName devuelve siempre una colección, ya haya un solo elemento, 
        varios o ninguno. Como nosotros sabemos que solo hay uno, ponemos [0] para coger el 
        elemento de la primera posición*/
        const mensaje = document.getElementsByClassName("mensaje")[0];
        // Lo mostramos
        mensaje.style.display = "block"
        /**/
        mensaje.getElementsByTagName("p")[0].textContent = "Debes introducir el nombre";
        nombre.focus();
        nombre.select();
        return;
    }
    // indexOf devuelve la posición de valor indicado en el array o -1 si no lo hay
    if(nombres.indexOf(nombre.value) != -1 ) {
        //window.alert("Ese nombre ya existe");
        const mensaje = document.getElementsByClassName("mensaje")[0];
        mensaje.style.display = "block"
        mensaje.getElementsByTagName("p")[0].textContent = "Ese nombre ya existe";
        nombre.focus();
        nombre.select();
        return;
    }
    nombres.push(nombre.value.trim()); // Añadimos el nombre al final del array
    totalNombres = totalNombres + 1;
    // totalNombres += 1;
    // totalNombres++;
    total.value = totalNombres;
    /* Realmente no hace falta un contador de nombres pues el array tiene la propiedad 
    length que nos dice cuantos valores tiene.
    total.value = nombres.length;
    */
    nombre.value = "";
    nombre.focus();
}

function borrar() {
    totalNombres = 0;
    document.getElementById("total").value = 0;
    const nombre = document.getElementById("nombre");
    nombres = []; // Creamos un nuevo array vacío
    nombre.value = "";
    nombre.focus();
    // Eliminamos el contenido del listado
    document.getElementById("listado").textContent = "";
}

function mostrar() {
    const listado = document.getElementById("listado");
    // Borramos el listado de nombres que pudiese haber de antes
    listado.textContent = "";
    // sort ordena el array por su valores alfabéticamente y de forma ascendente
    nombres.sort();
    // Para mostrarlos de forma sencilla separados por comas en la misma línea
    // listado.textContent = nombres;
    /* Recorremos todo el array de nombres. n irá conteniedo primero el primer nombre,
    luego el segundo, ... */
    for (const n of nombres) {
        const p = document.createElement("p");
        // Añadimos las clases de Bootstrap
        p.classList.add("border-bottom", "border-dark");
        // Añadimos el nombre como contenido del párrafo
        p.textContent = n;
        // Añadimos el párrafo al div llamado listado
        listado.appendChild(p);
    }

   /* Otra manera de hacerlo
    for (let i = 0; i < nombres.length; i++) {
        const p = document.createElement("p");
        // Añadimos las clases de Bootstrap
        p.classList.add("border-bottom", "border-dark");
        p.textContent = nombres[i];
        listado.appendChild(p);
    } */
}

function cerrarMensaje() {
    /* Como no le hemos puesto un id al mensaje, usamos getElementsByClassName para 
    obtenerlo. Este método devuelve una colección aunque no haya elementos o solo
    uno. Como nosotros sabemos que solo hay uno, usamos [0] directamente para
    obtenerlo */
    document.getElementsByClassName("mensaje")[0].style.display = "none";
}

document.getElementById("guardar").addEventListener("click", guardar);
document.getElementById("mostrar").addEventListener("click", mostrar);
document.getElementById("borrar").addEventListener("click", borrar);
// Cuando pulsemos en el div del mensaje, vamos a cerrarlo
document.getElementsByClassName("mensaje")[0].addEventListener("click", cerrarMensaje);

