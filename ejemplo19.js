function anhadir() {
    const tarea = document.getElementById("tarea");
    if(tarea.value.trim() != ""){
        const ul = document.getElementById("tareas");
        const nueva = document.createElement("li")
        const texto = document.createTextNode(tarea.value);
        nueva.appendChild(texto);
        ul.appendChild(nueva);
        tarea.value = "";
        tarea.focus();
    } else {
        window.alert("La tarea no puede estar vacía");
    }
}

function vaciar() {
    document.getElementById("tareas").innerHTML ="";
}

document.getElementById("anhadir").addEventListener("click", anhadir);
document.getElementById("vaciar").addEventListener("click", vaciar);
