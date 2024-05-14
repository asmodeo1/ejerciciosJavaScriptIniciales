
function ponerRojo1() {
     // Diferentes maneras de obtener todos los párrafos en este ejercicio
    //const parrafos = document.getElementsByTagName("p");
    const parrafos = document.getElementsByClassName("parrafo");
    //const parrafos = document.querySelectorAll("p");
    //const parrafos = document.querySelectorAll(".parrafo");
    //const parrafos = document.querySelectorAll("p.parrafo");
    
    // La peor manera de poner todos los párrafos en rojo
    parrafos[0].style.color = "red";
    parrafos[1].style.color = "red";
    parrafos[2].style.color = "red";
    parrafos[3].style.color = "red";
    parrafos[4].style.color = "red";
    parrafos[5].style.color = "red";
    parrafos[6].style.color = "red";
    parrafos[7].style.color = "red";
    parrafos[8].style.color = "red";
    parrafos[9].style.color = "red";
}

function ponerRojo2() {
     // Diferentes maneras de obtener todos los párrafos en este ejercicio
     //const parrafos = document.getElementsByTagName("p");
     const parrafos = document.getElementsByClassName("parrafo");
     //const parrafos = document.querySelectorAll("p");
     //const parrafos = document.querySelectorAll(".parrafo");
     //const parrafos = document.querySelectorAll("p.parrafo");

    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "#f56042";
    }
    /* También podríamos usar estos for pero es mejor usar siempre la
    propiedad length, por si aumentan o disminuyen el número de párrafos
    for (let i = 0; i <= 9; i++) {
    for (let i = 0; i < 10; i++) {
    */
}

function ponerRojo3() {
     // Diferentes maneras de obtener todos los párrafos en este ejercicio
     //const parrafos = document.getElementsByTagName("p");
     const parrafos = document.getElementsByClassName("parrafo");
     //const parrafos = document.querySelectorAll("p");
     //const parrafos = document.querySelectorAll(".parrafo");
     //const parrafos = document.querySelectorAll("p.parrafo");

     /* Recorrer las claves de una colección. En un array por defecto las claves
      son 0, 1, 2, 3, 4, .... pero incluye también las propiedades y 
     métodos length, item ,... */
     for (const i in parrafos) {
        // Con esto nos aseguramos de coger solo los 'i' que son números
        if(!isNaN(parseInt(i))) { // o if(isNaN(parseInt(i)) == false) {
            parrafos[i].style.color = "#b53319";
        }
     }

function ponerRojo4() {
    // Diferentes maneras de obtener todos los párrafos en este ejercicio
    //const parrafos = document.getElementsByTagName("p");
    const parrafos = document.getElementsByClassName("parrafo");
    //const parrafos = document.querySelectorAll("p");
    //const parrafos = document.querySelectorAll(".parrafo");
    //const parrafos = document.querySelectorAll("p.parrafo");

    /* Cuando no necesitamos la posición / índice del array o colección,
    lo más fácil es usar un for of. Primero se pone una variable o 
    constante con el nombre que queramos y luego la colección o array
    a recorrer */
    for (const parrafo of parrafos) {
        // parrafo irá siendo el primer párrafo, luego el segundo, ...
        parrafo.style.color = "#6b1503";
    }
}

function ponerNegrita() {
    // Usando esta manera, debemos coger el primer div, de ahí el [0] y luego sus p
    //const parrafos = document.getElementsByTagName("div")[0].getElementsByTagName("p");
    const parrafos = document.querySelectorAll("div p");
    for (const p of parrafos) {
        p.style.fontWeight = "bold";
    }
}

function ponerBorde() {
   /* Obtenemos todos los p dentro de un div. Como las colecciones
   comienzan en la posición cero, hacemos el for desde 1, pues sino
   visualmente los pares serían los impares (0, 2, 4,...) 
   const parrafos = document.querySelectorAll("div p");
    for(let i = 1; i < parrafos.length; i+=2) { // i = i + 2
        parrafos[i].style.border = "solid";
    }
    */
   // Usando un selector adecuado, ya podemos obtener los pares
    const parrafos = document.querySelectorAll("div p:nth-child(even)");
    for (const p of parrafos) {
        p.style.border = "solid";
    }
}

function ponerFondo() {
   /* const parrafos = document.querySelectorAll("div p");
    for (let i = 0; i < 3; i++) { 
        parrafos[i].style.backgroundColor = "pink";
    }*/
    /* Nada nos impide ir al revés
    for( let i = 2; i >=0; i--) {
        parrafos[i].style.backgroundColor = "pink";
    }*/
    // 3: a partir del tercer elemento
    // -n: hacia atrás
    // -n + 3: los tres primeros
    const parrafos = document.querySelectorAll("div p:nth-child(-n + 3)");
    for (const p of parrafos) {
        p.style.backgroundColor = "pink";
    }
}

function ponerCursiva() {
    const titulos = document.querySelectorAll("h1, h2");
    for (const t of titulos) {
        if(t.style.fontStyle == "italic") {
            t.style.fontStyle = "normal";
        } else {
            t.style.fontStyle = "italic";
        }
        /* Usando el operador ternario podemos hacer if de forma más corta
            condición ? valorSí : valorNo
        t.style.fontStyle = t.style.fontStyle == "italic" ? "normal" : "italic";
        */
    }
}

/* Al añadir las noticias queremos que pnga noticia 1, noticia 2, ...
Para ello una opción es crear una variable global que cuente las 
noticias que haya.
let numeroNoticias = 0; */

function cambiarColorP(evt){
    // currentTarget es el P por el que se mueve el ratón
    evt.currentTarget.style.color = "green";
}

function quitarColorP(evt){
    // currentTarget es el P por el que se mueve el ratón
    evt.currentTarget.style.color = "black";
}

function anandirNoticias() {
    const noticias = document.getElementById("noticias");
    /* La propiedad length de una colección nos dice cuantos elementos 
    tiene. En nuestro caso, el número de p en noticias es el número de noticias
    que hay */
    const numeroNoticias = document.querySelectorAll("#noticias p").length;

    for (let i = 1; i < 3; i++) {
        // Usando la variable global debemos aumentar el número de noticias en uno
        // numeroNoticias++; 
        const p = document.createElement("p");
        // Usando la variable global
        // p.textContent = "Noticia " + numeroNoticias;
        p.textContent = "Noticia " + (numeroNoticias + i);
        // Añadimos dos linstener a cada p que creamos
        // mouseover: cuando el puntero del ratón pasa sobre el elemento
        // mouseout: cuando el puntero del ratón sale del elemento
        p.addEventListener("mouseover", cambiarColorP);
        p.addEventListener("mouseout", quitarColorP);
        // No olvidrse nunca de añadir el nodo a algún nodo existente
        // en la página
        noticias.appendChild(p);
    }
}

function agrandar() {
    const noticias = document.querySelectorAll("#noticias p");
    if (noticias.length == 0) {
        window.alert("Primero añade alguna noticia");
        return;
    }
    for (const noticia of noticias) {
        noticia.style.fontSize = "2rem";
    }
}

function eliminar() {
    const noticias = document.getElementById("noticias");
    // La manera más fácil de vaciar todo el contenido de un nodo
    noticias.textContent = "";
    // Si usamos la variable global hay que poner el número de noticias a cero
    // numeroNoticias = 0;
}

document.getElementById("rojo1").addEventListener("click", ponerRojo1);
document.getElementById("rojo2").addEventListener("click", ponerRojo2);
document.getElementById("rojo3").addEventListener("click", ponerRojo3);
document.getElementById("rojo4").addEventListener("click", ponerRojo4);

document.getElementById("negrita").addEventListener("click", ponerNegrita);
document.getElementById("borde").addEventListener("click", ponerBorde);
document.getElementById("fondo").addEventListener("click", ponerFondo);
document.getElementById("cursiva").addEventListener("click", ponerCursiva);

document.getElementById("anhadirNoticia").addEventListener("click", anandirNoticias);
document.getElementById("agrandar").addEventListener("click", agrandar);
document.getElementById("eliminar").addEventListener("click", eliminar);

