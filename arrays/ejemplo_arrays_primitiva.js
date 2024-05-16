function generar() {
    const cajas = document.querySelectorAll("#resultado div");
    /* Si hay habíamos generado una combinación, debemos quitar los colores 
    de las cajas que los tenían. Una opción es recorrer todas las cajas y eliminar la 
    clase bg-info, no dando problema en aquellas cajas que no la tengan.
    Una mejor opción podría ser elegir un selector con solo las que la tuviesen, como
    #resultado div.bg-info */
    for (const caja of cajas) {
        caja.classList.remove("bg-info"); // bg-info es una clase de Bootstrap para un color de fondo
    }
    
    // Como no se pueden repetir números en la lotería, debemos ir guardando los números
    // en un array para comprobarlo.
    const numeros = [];
    for (let i = 0; i < 6; i++) { // La primitiva son 6 números entre 1 y 49
        let numero; // Definimos la variable fuera del while pues la necesitamos
                    // despúes
        do {
            // Generamos un número entre 1 y 49
            numero = Math.floor(Math.random() * 49 + 1); 
            // indexOf devuelve la posición de un elemento dentro de un array o -1 si no
            // lo encuentra. Por eso repetimos el bucle mientras lo encuentre (!= -1)
        } while(numeros.indexOf(numero) != -1);

        numeros.push(numero); // Añadimos el número al array
        // Poner en colo la caja correspondiente a dicho número. Usamos -1 ya que
        // hemos generado números entre 1 y 49 y la colección va de 0 a 48
        cajas[numero - 1].classList.add("bg-info");
    }
    mostrarResumem(numeros);

    mostrarReintegro();
}

// Genera el reintegro entre 0 y 9 y lo muestra
function mostrarReintegro() {
    const reintegro = document.getElementById("reintegro");
    reintegro.textContent = "Reintegro: " + Math.floor(Math.random() * 10);
}

// Muestra los números generados
function mostrarResumem(numeros) {
    const resumen = document.getElementById("resumen");
    // Borramos el resumen anterior
    resumen.textContent = "";
    /* sort ordena siempre el array como textos, comparando caracter a 
    caracter, con lo que 2 es mayor que 10, pues compara primer el 2 con el 1.
    Usando esto los comparamos numéricamente de forma ascendente */
    numeros.sort((n1, n2) => n1 - n2);
    for (const numero of numeros) {
        resumen.textContent += numero + " ";
        // o resumen.textContent = resumen.textContent + numero;
    }
    // En lugar del for podríamos usar el método join de los array que devuelve
    // una cadena de texto con todos los elementos separados por el valor indicado
    //resumen.textContent = numeros.join(" "); 
}

// Esta función crea las cajas de los 49 números
function crearCajas() {
    const resultado = document.getElementById("resultado");
    for (let i = 1; i < 50; i++) {
        const div = document.createElement("div");
        div.classList.add("display-7", "border", "border-1", "p-2");
        div.textContent = i;
        resultado.appendChild(div);
    }
}

crearCajas();
document.getElementById("generar").addEventListener("click", generar);
