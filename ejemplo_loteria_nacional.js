function generar() {
    const cantidad = document.getElementById("cantidad");
    if(isNaN(Number(cantidad.value)) 
        || isNaN(parseInt(cantidad.value)) 
        || cantidad.value < 1) {
       window.alert("Debes escribir un número mayor que cero");
       cantidad.focus();
       cantidad.select(); 
       return;
    }
    const numeros = [];
    for (let i = 1; i <= cantidad.value; i++) {
        //Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
        const numero = Math.floor(Math.random() * 99999 + 1);
       /* if (numero < 10) {
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
        numeros.push(String(numero).padStart(5, "0"));
        //numeros.push(numero.toString().padStart(5, "0"));
        //numeros.push(("" + numero).padStart(5, "0"));
    }
    numeros.sort();

    const generados = document.getElementById("generados");
    generados.textContent = "";
    //for (let i = 0; i < cantidad.value; i++) {
    //for (let i = 0; i < numeros.length; i++) {    
    for (const numero of numeros) {
        const div = document.createElement("div");
        div.classList.add("border", "border-1", "bg-body-tertiary", "p-2", "m-2", "font-monospace");
        generados.appendChild(div);
        /*const texto = document.createTextNode(numero);
        div.appendChild(texto);*/
        div.textContent = numero; // si uso el for of
        //div.textContent = numeros[i]; // si uso el for normal
    }
}


document.getElementById("generar").addEventListener("click", generar);
