/* Creamos un array vacío para almacenar todas las notas que introduce el usuario.
Por ello debemos crear una variable fuera de una función, normalmente en la parte
superior del código. Haciendo esto la variable es global:

- existe mientras no se recargue la página
- podemos acceder a ella desde cualquier función, incluso desde otros scripts de la
página

Por el contrario, una variable local es la que se crea dentro de una función:
- se crea y se destruye cada vez que se ejecuta la función
- solo se peude acceder a ella desde la función en la que se definen

Si creamos una variable dentro de unas llaves de un if, for, ... será una variable
local existiendo solo dentro de esas llaves (salvo que usemos var en lugar de let y const)
*/
const notas = []; 

function guardar() {
    // Obtenemos el input de la nota
    const nota = document.getElementById("nota");
    // Comprobamos que sea un número entero o con decimales
    if(isNaN(Number(nota.value)) || isNaN(parseFloat(nota.value))) { 
        alert("No es una nota");
        nota.focus();
        nota.select();
        return;
    }
    // Añadimos la nota al final del array
    notas.push(nota.value);
    // Por usabilidad borramos el cuadro de texto y le damos el foco
    nota.value = "";
    nota.focus();
}

function vaciar() {
    /* Splice elimina todos los elementos de array a partir de la posición indicada
    y hasta el final, salvo que se indique un segundo parámetro con el número de
    elementos a eliminar */
    notas.splice(0); 
    // Borramos las notas que se estaban mostrando, si es que hubiese alguna
    document.getElementById("datos").textContent = "";
}

function mostrar() {
    const datos = document.getElementById("datos");
    // Borramos las notas que se estaban mostrando, si es que hubiese alguna
    datos.textContent = "";
    /* Recorremos todas las notas. 
    Con un for of podemos recorrer cualquier colección o array.
    n es un nombre cualquiera que irá conteniendo cada uno de los elementos de la 
    colección; en nuestro caso cada nota */
    for (const n of notas) {
        const span = document.createElement("span");
        span.textContent = n;
        /* La línea anterios es igual a estas dos
        const texto = document.createTextNode(n);
        span.appendChild(texto);*/
        // Añadimos el nuevo span al párrafo datos
        datos.appendChild(span);
    }

    /* Con un for "normal" (length devuelve la longitud del array)
    for (let i = 0; i < notas.length; i++) {
        const span = document.createElement("span");
        span.textContent = notas[i];
        datos.appendChild(span);
    }*/

    /* Con un for in (i será cada una de las posiciones / índices )
    for (const i in notas) {
        const span = document.createElement("span");
        span.textContent = notas[i];
        datos.appendChild(span);
    }*/

    /* Un for each (lo explicaremos más adelante en el curso)
    notas.forEach(n => {
        const span = document.createElement("span");
        span.textContent = n;
        datos.appendChild(span);
    });
    */
}

document.getElementById("guardar").addEventListener("click", guardar);
document.getElementById("vaciar").addEventListener("click", vaciar);
document.getElementById("mostrar").addEventListener("click", mostrar);

