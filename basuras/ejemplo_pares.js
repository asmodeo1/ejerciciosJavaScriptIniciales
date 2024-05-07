function mostrar() {
    const numero = document.getElementById("numero");
    const datos =  document.getElementById("datos");
    if(isNaN(Number(numero.value)) || isNaN(parseInt(numero.value))) { 
        alert("No es un número");
        numero.focus();
        numero.select();
        return;
    }
    datos.textContent = "";
    // datos.innerText = ""; // no es la oficial pero la soportan todos los navegadores
    // datos.innerHTML = "";
    for(let i = 0; i <= numero.value; i+=2) { // i = i + 2
        const span = document.createElement("span");
        const texto = document.createTextNode(i);
        span.appendChild(texto);
        datos.appendChild(span);
    }
    // Otra manera
    /*for(let i = 0; i <= numero.value; i++) {
        if(numero % 2 == 0) { // vemos si es par
            const span = document.createElement("span");
            const texto = document.createTextNode(i);
            span.appendChild(texto);
            datos.appendChild(span);
        }
    }*/

}

document.getElementById("numero").focus();
document.getElementById("mostrar").addEventListener("click", mostrar);

