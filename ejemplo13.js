
/* Esta función recibe tres colores (con valores de 0 a 255) y devuelve una cadena
con rgb y los colores, que es la propiedad CSS. */

function rgb(rojo, verde, azul) {
    /* Usando plantillas de cadenas, llamadas interpolación en otros lenguajes,
    podemos crear una cadena sin tener que andar abriendo y cerrando comillas ni 
    uniéndolas con + */
    return `rgb(${rojo}, ${verde}, ${azul})`;
    // Sin interpolación sería:
    //return "rgb("+ rojo + "," + verde + "," + azul + ")";
}
function cambiar() {
    const rojo = document.getElementById("rojo").value;
    const verde = document.getElementById("verde").value;
    const azul = document.getElementById("azul").value;
    //const color = "rgb(" + rojo +"," + verde + "," + azul + ")";
    // const color = `rgb(${rojo},${verde},${azul})`;
    const color = rgb(rojo, verde, azul);
    document.getElementById("texto").style.color = "rgb(valoRojo, valorGreen, valorAzul)";
    
    // VERSIÓN CON UNA SOLA LÍNEA
    /* Para cambiar el color debemos tener en cuenta los tres ranges. Por ello usamos
    la función rgb que hemos creado arriba 
    document.getElementById("texto").style.color = 
        rgb(document.getElementById("rojo").value,
        document.getElementById("verde").value, 
        document.getElementById("azul").value);
        */
}
/* En este ejercicio vamos a usar una misma función para todos los range.
El evento input se produce cada vez que el usuario va moviendo el "deslizador" del range
*/
document.getElementById("rojo").addEventListener("input", cambiar);
document.getElementById("verde").addEventListener("input", cambiar);
document.getElementById("azul").addEventListener("input", cambiar);
