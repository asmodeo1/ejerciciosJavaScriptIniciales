function generar() {
    const cantidad = document.getElementById("cantidad");
    // Comprobamos si es un número y mayor que cero
    if (isNaN(Number(cantidad.value))
        || isNaN(parseInt(cantidad.value))
        || cantidad.value < 1) {
        window.alert("Debes escribir un número mayor que cero");
        cantidad.focus();
        cantidad.select();
        return;
    }
    // Para que no se repitan los números debemos crear un array para ir guardándolos
    const numeros = [];

    for (let i = 1; i <= cantidad.value; i++) {
        /* La fórmula para generar números enteros enter un mínimo y un máximo es
        Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo) */
        let numero;
        do {
            // Generamos un número entre 1 y 99.999
            // JavaScript permite usar _ como separador de miles para mayor claridad
            numero = Math.floor(Math.random() * 99_999 + 1);
            /* El método padStart rellena pro la izquierda con el valor indicado una 
            cadena hasta que tenga el tamaño indicado. En nuestro caso queremos que la 
            cadena tenga 5 caracteres y que rellene con 0 hasta completar esos 5.
            Usamos String para convertir el número en cadena, pues los números no
            tienen el método padStart */
            numero = String(numero).padStart(5, "0");
            /* if (numeros.indexOf(numero) != -1) {
                 console.log(numero + " ya existe");
             }*/
        } while (numeros.indexOf(numero) != -1);

        /* Sin usar padStart deberíamos hacer algo como esto:
         if (numero < 10) {
             numeros.push("0000" + numero);
         } else if (numero < 100) {
             numeros.push("000" + numero);
         } else if (numero < 1000) {
             numeros.push("00" + numero);
         } else if (numero < 10000) {
             numeros.push("0" + numero);
         } else {
             numeros.push(numero);
         }*/
        numeros.push(numero);
    }
    // Ordenamos los números
    numeros.sort();

    const generados = document.getElementById("generados");
    // Vaciamos los generados anteriormente
    generados.textContent = "";
   
    for (const numero of numeros) {
        // o for (let i = 0; i < cantidad.value; i++) {
        // o for (let i = 0; i < numeros.length; i++) { 
        const div = document.createElement("div");
        div.classList.add("border", "border-1", "bg-body-tertiary", "p-2", "m-2", "font-monospace");
        generados.appendChild(div);
        /*const texto = document.createTextNode(numero);
        div.appendChild(texto);*/
        const serie = Math.floor(Math.random() * 10 + 1);
        const fraccion = Math.floor(Math.random() * 10 + 1);
        const spanSerie = document.createElement("span");
        spanSerie.classList.add("fw-bold")
        spanSerie.innerText = " serie: " + serie;

        const spanFraccion = document.createElement("span");
        spanFraccion.classList.add("fw-bold")
        spanFraccion.innerText = " fracción: " + fraccion;

        div.textContent = numero;
        div.appendChild(spanSerie);
        div.appendChild(spanFraccion);

        /* Si lo queremos hacer usando innerHTML
        div.innerHTML = numero +
            "<span class='fw-bold'>serie: " + serie + "</span>" +
            "<span class='fw-bold'>fraccion: " + fraccion + "</span>"
        */
       /* div.textContent = numero
            + " serie: " + serie
            + " fracción: " + fraccion; // si uso el for of
            */
        //div.textContent = numeros[i] + " " + serie + " " + fraccion; // si uso el for normal
    }
}


document.getElementById("generar").addEventListener("click", generar);
