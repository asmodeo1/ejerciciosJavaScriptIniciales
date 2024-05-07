let notas = []; // Creamos un array vacío
// Otra manera de crearlo
//let notas = new Array();
console.log(notas.length); // Escribe 0 (la longitud del array, es decir, el número de elemntos que contiene)
// Con push añadimos elementos al final del array
notas.push(4); // El array será [4]
notas.push(8); // El array será [4, 8]
notas.push(3); // El array será [4, 8, 3]
notas.push(1); // El array será [4, 8, 3, 1]
console.log(notas.length); // Escribe 4
console.log(notas); // Podemos mostrar todas las notas a la vez en la consola
// Añadimos 10 nuevas notas al final. Las notas será 0, 1, 2, 3, ... 9
for (let i = 0; i < 10; i++) {
    notas.push(i);
}
// Los arrays pueden ser de cualquier tipo
// Creamos un array de cadenas (string)
let nombres = ["laura", "pedro", "julio"];
// Añadimos eva al final del array
nombres.push("eva");
// Podemos crear el array de datos de diferentes tipos
let cosas = ["laura", 2, true, ""];
// Usando [posición] podemos mostrar o modificar un elemento en concreto del array
// siendo 0 la primera posición (también se llama índice a la posición)
console.log(nombres[0]); // Escribe laura
/* Aunque no será lo habitual, si indicamos una posición no existente, se crean las
posiciones anteriores con el valor undefined (en nuestro caso las posiciones 4 y 5) */
nombres[6] = "sandra"; 
console.log(nombres);

const numeros = [1, 2, 4];
numeros[0] = 10; // Modificamos la primera nota
/* Esto dará error pues, como hemos definido el array con const, no se le puede asignar
un nuevo array, aunque si modificar, añadir y eliminar elementos
numeros = [10, 6, 8]; */
numeros.push(8); // El array quedaría así: [10, 2, 4, 8]
// Con unshift añadimos un elemento al comienzo del array
numeros.unshift(3); // El array quedaría así: [3, 10, 2, 4, 8]
// Con pop eliminamos un elemento del final del array
numeros.pop(); // El array quedaría así: [3, 10, 2, 4]
// Con shift eliminamos un elemento del comienzo del array
numeros.shift(); // El array quedaría así: [10, 2, 4]
/* Con splice podemos eliminar elementos desde la posición indicada (primer parámetro)
hasta el número de ellos que indiquemos en el segundo parámetro.
En este caso eliminamos solo el elemento de la posición 1 */
numeros.splice(1, 1); // El array quedaría así: [10, 4]
// Con este splice vaciamos el array
numeros.splice(0); // El array quedaría así : []