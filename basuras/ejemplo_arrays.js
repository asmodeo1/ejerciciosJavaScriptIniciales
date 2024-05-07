const notas = []; // Variable global. Puede ser accedida desde cualquier sitio y existen mientars exista la página


function guardar() {
    const nota = document.getElementById("nota");

    if(isNaN(Number(nota.value)) || isNaN(parseFloat(nota.value))) { 
        alert("No es una nota");
        nota.focus();
        nota.select();
        return;
    }
    notas.push(nota.value);
    nota.value = "";
    nota.focus();
}

function vaciar() {
    notas.splice(0); // Eliminamos los elementos desde la posición 0 hasta el final
    document.getElementById("datos").textContent = "";
}

function mostrar() {
    const datos = document.getElementById("datos");
    datos.textContent = "";
    for (const n of notas) {
        const span = document.createElement("span");
        span.textContent = n;
        /* La línea anterios es como estas dos
        const texto = document.createTextNode(n);
        span.appendChild(texto);*/
        datos.appendChild(span);
    }

    /* Con un for "normal" 
    for (let i = 0; i < notas.length; i++) {
        const span = document.createElement("span");
        span.textContent = notas[i];
        datos.appendChild(span);
    }*/

    /* Con un for in
    for (const i in notas) {
        const span = document.createElement("span");
        span.textContent = notas[i];
        datos.appendChild(span);
    }*/

    /* Un for each
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

