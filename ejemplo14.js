function visitar() {
    const mayor = document.getElementById("mayor");
    if(mayor.checked) {
        window.location.href = "http://www.w3schools.com"
    } else {
        document.getElementById("mensaje").classList.remove("invisible");
    }
}

document.getElementById("acceder").addEventListener("click", visitar);
