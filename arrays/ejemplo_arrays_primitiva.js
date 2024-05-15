function generar() {
    const cajas = document.querySelectorAll("#resultado div");
    for (const caja of cajas) {
        caja.classList.remove("bg-info");
    }
    
    const numeros = [];
    for (let i = 0; i < 6; i++) {
        let numero;
        do {
            numero = Math.floor(Math.random() * 49 + 1); 
        } while(numeros.indexOf(numero) != -1);

        numeros.push(numero);
        cajas[numero - 1].classList.add("bg-info");
    }
    const resumen = document.getElementById("resumen");
    resumen.textContent = "";
    numeros.sort((n1, n2) => n1 - n2);
    for (const numero of numeros) {
        // resumen.textContent = resumen.textContent + numero;
        resumen.textContent += numero + " ";
    }

    //resumen.textContent = numeros.join("-");
}


const resultado = document.getElementById("resultado");
for (let i = 1; i < 50; i++) {
    const div = document.createElement("div");
    div.classList.add("display-7", "border", "border-1", "p-2");
    div.textContent = i;
    resultado.appendChild(div);
}

document.getElementById("generar").addEventListener("click", generar);