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
    for (let i = 1; i < 11; i++) {
        const span = document.createElement("span");
        const texto = document.createTextNode(numero.value + " * " + i + " = " + numero.value * i);
        // Con plantillas de cadenas
        //const texto = document.createTextNode(`${numero.value} * ${i} = ${numero.value * i}`);
        span.appendChild(texto);
        // En lugar de las dos líneas anteriores
        // span.textContent = numero * i;
        datos.appendChild(span);
    }
}

document.getElementById("numero").focus();
document.getElementById("mostrar").addEventListener("click", mostrar);

