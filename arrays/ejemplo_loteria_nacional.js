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
        numeros.push(Math.floor(Math.random() * 99999 + 1));
    }
    numeros.sort();

    const generados = document.getElementById("generados");
    generados.textContent = "";
    //for (let i = 0; i < cantidad.value; i++) {
    //for (let i = 0; i < numeros.length; i++) {    
    for (const numero of numeros) {
        const div = document.createElement("div");
        div.classList.add("border", "border-1", "bg-body-tertiary", "p-2", "m-2");
        generados.appendChild(div);
        div.textContent = numero; // si uso el for of
        //div.textContent = numeros[i]; // si uso el for normal
    }
}


document.getElementById("generar").addEventListener("click", generar);
