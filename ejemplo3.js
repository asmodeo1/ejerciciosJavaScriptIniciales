function sumar() {
    /* Con console.log escribimos en la consola JavaScript (Inspeccionar > pestaña consola).
    Es mensaje informativo solo para nosotros, no para los usuarios. Solemos usarlo
    para comprobar que el listener está funcionando, para saber el valor de un elemento, ...
    cuando estamos escribiendo el código y probando.
    No sería necesario en este ejercicio; simplemente lo ponemos a modo de prueba */
    console.log("sumar");
    /* Con getElementById obtenemos el elemento entero (con su color, tamaño, posicionamiento, ...).
    Nosotros queremos el número que contiene; para ello usamos su propiedad value */
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    /* Del resultado necesitamos todo el control, no el valor que contiene */
    const resultado = document.getElementById("resultado");
    /* El operador + sirve tanto para sumar como para concatenar cadenas.
    Como la propeidad value de los input text y number devuelve un string (texto), debemos
    convertirlos a números con la función parseInt (para números sin decimales) o
    parseFloat (para números con decimales) */
    resultado.value = parseInt(numero1) + parseInt(numero2);

    /* En una sola línea
    document.getElementById("resultado").value = 
        parseInt(document.getElementById("numero1").value) + 
        parseInt(document.getElementById("numero2").value);
    */
}
function restar() {
    console.log("restar");
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado");
    /* En restar, multiplicar y dividir el parseInt no sería necesario, pues JavaScript
    ya convierte los textos en números */
    resultado.value = parseInt(numero1) - parseInt(numero2);
}
function multiplicar() {
    console.log("multiplicar");
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado");
    resultado.value = parseInt(numero1) * parseInt(numero2);
}
function dividir() {
    console.log("dividir");
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado");
    resultado.value = parseInt(numero1) / parseInt(numero2);
}

/* Obtenemos los botones y les añadimos el listener click, para realizar algo
cuando se pulse en ellos */
document.getElementById("sumar").addEventListener("click", sumar);
document.getElementById("restar").addEventListener("click", restar);
document.getElementById("multiplicar").addEventListener("click", multiplicar);
document.getElementById("dividir").addEventListener("click", dividir);



