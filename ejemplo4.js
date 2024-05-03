function convertirGradosCF() {
    // Obtenemos los input necesarios */
    const gradosCentigrados = document.getElementById("gradosCentigrados");
    const gradosFarenheit = document.getElementById("gradosFarenheit");
    /* Con getElementById obtenemos el elemento entero (con su color, tamaño, posicionamiento, ...).
    Nosotros queremos el número que contiene; para ello usamos su propiedad value */
    const resultado = gradosCentigrados.value * (9 / 5) + 32;
    gradosFarenheit.value = resultado;
}

function convertirGradosFC() {
    const gradosCentigrados = document.getElementById("gradosCentigrados");
    const gradosFarenheit = document.getElementById("gradosFarenheit");
    const resultado = (gradosFarenheit.value - 32) * (5 / 9);
    gradosCentigrados.value = resultado;
}

function borrar() {
    const gradosCentigrados = document.getElementById("gradosCentigrados");
    const gradosFarenheit = document.getElementById("gradosFarenheit");
    // Asigamos la cadena vacía a la propiedad value de uns input */
    gradosCentigrados.value = "";
    gradosFarenheit.value = "";
}

/* Obtenemos los botones y les añadimos el listener click, para realizar algo */
const convertirCF = document.getElementById("convertirCF");
convertirCF.addEventListener("click", convertirGradosCF);
const convertirFC = document.getElementById("convertirFC");
convertirFC.addEventListener("click", convertirGradosFC);
const reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", borrar);

/* Podemos poner cada dos líneas en una sola, pues no necesitamos la variable / constante
para nada más
 document.getElementById("convertirCF").addEventListener("click", convertirGradosCF);
 */

