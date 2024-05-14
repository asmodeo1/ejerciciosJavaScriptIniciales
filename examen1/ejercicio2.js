function cambiarJavaScript() {
    const javascript = document.getElementById("javascript");
   /* if (javascript.classList.contains("d-none")) {
        javascript.classList.remove("d-none");
    } else {
        javascript.classList.add("d-none");
    }*/
    javascript.classList.toggle("d-none");
    //document.getElementById("javascript").classList.toggle("d-none");
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
/*
const btnJavascript = document.getElementById("btnJavascript");
btnJavascript.addEventListener("click", cambiarJavaScript);
*/
document.getElementById("btnJava").addEventListener("click", cambiarJava);
document.getElementById("btnPhp").addEventListener("click", cambiarPhp);

