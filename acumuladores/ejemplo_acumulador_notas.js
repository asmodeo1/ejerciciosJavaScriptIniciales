/* Como tenemos que llevar la cuenta de lso aprobados y suspensos mientras esté
cargada la página, los definimos como variables globales ya que, si los definimos
dentro de la función comprobar, cada vez que se pulsase el botón se volvería a crear 
con lo que no se irían contando las notas */
let contadorAprobados = 0;
let contadorSuspensos = 0;

function comprobar() {
    const nota = document.getElementById("nota");
    const aprobados = document.getElementById("aprobados");
    const suspensos = document.getElementById("suspensos");
    const resultado = document.getElementById("resultado");
    if(isNaN(Number(nota.value)) || isNaN(parseInt(nota.value))) {
        resultado.textContent = "No es una nota válida";
        nota.focus();
        nota.select();
        return;
    }
    if(nota.value < 0 || nota.value > 10) {
        resultado.textContent = "La nota tiene que estar entre 0 y 10";
        nota.focus();
        nota.select();
        return;
    }
    if(nota.value >= 5) {
        resultado.textContent = "Aprobado";
        resultado.style.color = "green";
        // Incrementamos el contador de aprobados
        contadorAprobados = contadorAprobados + 1;
        // Otras maneras de hacer lo mismo:
        //contadorAprobados++;
        //contadorAprobados += 1;
        aprobados.value = contadorAprobados;
    } else {
        resultado.textContent = "Suspenso";
        resultado.style.color = "red";
        // Incrementamos el contador de suspensos
        contadorSuspensos = contadorSuspensos + 1;
        //contadorSuspensos++;
        //contadorSuspensos += 1;
        suspensos.value = contadorSuspensos;
    }
    nota.focus();
    nota.select();
}

function borrar() {
    // Los contadores deben ponerse a cero
    contadorAprobados = 0;
    contadorSuspensos = 0;
    const aprobados = document.getElementById("aprobados");
    const suspensos = document.getElementById("suspensos");
    const resultado = document.getElementById("resultado");
    const nota = document.getElementById("nota");
    nota.value = "";
    suspensos.value = 0;
    aprobados.value = 0;
    /* Como ya comentamos en el HTML, queremos que el párrafo siempre tenga un alto, ya
    que si no, los botones se desplazarán cuando el párarfo tenga o no texto y no queda
    estético. Hemos usado innerHTML pues textContent y inenrText escribirían &nbsp; y
    no un espacio en blanco */
    resultado.innerHTML = "&nbsp;";
}


document.getElementById("comprobar").addEventListener("click", comprobar);
document.getElementById("borrar").addEventListener("click", borrar);
