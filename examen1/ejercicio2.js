function cambiarJavaScript() {
    const javascript = document.getElementById("javascript");
    /* Con el método toggle, si la clase está se la quita, si no está
    se la pone */
    javascript.classList.toggle("d-none");
    // En una sola línea las dos instrucciones anteriores
    // document.getElementById("javascript").classList.toggle("d-none");
    /* Sin toggle deberíamos realizar algo como:
    if (javascript.classList.contains("d-none")) {
        javascript.classList.remove("d-none");
    } else {
        javascript.classList.add("d-none");
    }*/
}

function cambiarJava() {
    const java = document.getElementById("java");
    java.classList.toggle("d-none");
}

function cambiarPhp() {
    const php = document.getElementById("php");
    php.classList.toggle("d-none");
}

document.getElementById("btnJavascript").addEventListener("click", cambiarJavaScript);
/* En dos líneas lo anterior:
const btnJavascript = document.getElementById("btnJavascript");
btnJavascript.addEventListener("click", cambiarJavaScript);
*/
document.getElementById("btnJava").addEventListener("click", cambiarJava);
document.getElementById("btnPhp").addEventListener("click", cambiarPhp);

