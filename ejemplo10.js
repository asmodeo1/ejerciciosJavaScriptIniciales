function anhadir() {
    const lista1 = document.getElementById("candidatos");
    const lista2 = document.getElementById("elegidos");
    if(lista1.selectedIndex != -1){
        lista2.appendChild(lista1.options[lista1.selectedIndex]);
        lista1.remove(lista1.selectedIndex);
    } else {
        window.alert("Debes seleccionar un elemento de la lista de candidatos");
    }
}

function quitar() {
    const lista1 = document.getElementById("candidatos");
    const lista2 = document.getElementById("elegidos");
    if(lista2.selectedIndex != -1){
        lista1.appendChild(lista2.options[lista2.selectedIndex]);
        lista2.remove(lista2.selectedIndex);
    } else {
        window.alert("Debes seleccionar un elemento de la lista de elegidos");
    }
}

document.getElementById("anhadir").addEventListener("click", anhadir);
document.getElementById("quitar").addEventListener("click", quitar);
