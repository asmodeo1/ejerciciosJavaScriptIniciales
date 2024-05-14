
const nombres = ["laura", "sergio", "eva", "eduardo", "luis", "sandra", "sonia", "roberto"];
const apellidos = ["alonso", "garcía", "sanchez", "olivo", "romero", "silva", "sarabia"];

for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.classList.add("m-3", "p-2");
    // Los 10 primeros de un color
    if(i < 10) {
        div.classList.add("bg-success", "text-white");
    // Los 10 siguientes en otro        
    } else if(i < 20) { // o if (i >=10 && i <20) { 
        div.classList.add("bg-warning");
    } else if(i < 30) { // Los 10 siguientes en otro
        div.classList.add("bg-danger", "text-white");
    } else { // El resto
        div.classList.add("bg-white");
    }
    document.querySelector("main").appendChild(div)
    // También podríamos usar:
    // document.getElementsByTagName("main")[0].appendChild(div)
    /* Queremos ir elegiendo nombres aleatoriamente.
    Para obtener un número pseudoaleatorio podemos usar la 
    siguiente fórmula:
        Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo);
    En nuestro caso máximo es el número de elementos en el array nombres,
    y mínimo es cero (primera posición en un array). Con lo que nos
    quedaría:
        Math.floor(Math.random() * (nombres.length - 1  - 0 + 1) + 0);
    */
    const numeroNombre = Math.floor(Math.random() * (nombres.length));
    // Hacemos lo mismo con los apellidos
    const numeroApellidos = Math.floor(Math.random() * (apellidos.length));
    /* Queremos mostrar un número y un punto antes de cada nombre. 
    Como i comienza en cero, debemos sumarle 1, para comenzar en 1.
    En este caso no haría falta usar paréntesis, pues JavaScript, mientras
    encuentre números los suma; en cuanto encuentre textos los concatena */
    div.textContent = (i + 1) + ". " + nombres[numeroNombre].toUpperCase() + " " + apellidos[numeroApellidos].toUpperCase();
    // O usando plantillas de cadenas
    //div.textContent = `${nombres[numeroNombre]} ${nombres[numeroApellidos]}`;
}

function ocultarDescuentos15() {
    /* Seleccionamos todos los div que tengan la clase bg-success y
    sean hijos directos de main */
    const divs = document.querySelectorAll("main > div.bg-success");
    for (const div of divs) {
        // toggle añade la clase si no la tiene el elemento y la quita
        // si la tiene
        div.classList.toggle("d-none");
    }
}

function ocultarDescuentos10() {
    const divs = document.querySelectorAll("main > div.bg-warning");
    for (const div of divs) {
        div.classList.toggle("d-none");
    }
}

function ocultarDescuentos5() {
    const divs = document.querySelectorAll("main > div.bg-danger");
    for (const div of divs) {
        div.classList.toggle("d-none");
    }
}

document.getElementById("descuento15").addEventListener("click", ocultarDescuentos15);
document.getElementById("descuento10").addEventListener("click", ocultarDescuentos10);
document.getElementById("descuento5").addEventListener("click", ocultarDescuentos5);


