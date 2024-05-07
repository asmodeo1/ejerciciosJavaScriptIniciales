function mostrar(evt) {
    console.log(evt.currentTarget.value);
    evt.currentTarget.style.backgroundColor = "red";
}

const contenedor = document.getElementById("contenedor");
for (let i = 1; i <= 10; i++) {
    const boton = document.createElement("input");
    boton.setAttribute("type", "button"); // boton.type = "button";
    boton.setAttribute("value", "botón " + i); //boton.value = "boton " + i;
    //boton.setAttribute("value", `botón ${i}`);
    //boton.classList.add("btn");
    //boton.classList.add("btn-info");
    //boton.classList.add("m-3");
    boton.classList.add("btn", "btn-info", "m-3");
    boton.addEventListener("click", mostrar);
    contenedor.appendChild(boton);
}