let notas = []; // array vacio
// Otra maneta de crearlo
//let notas = new Array();
console.log(notas.length); // Escribe 0
notas.push(4); // push añade al final [4]
notas.push(8); // [4, 8]
notas.push(3); // [4, 8, 3]
notas.push(1); // [4, 8, 3, 1]
console.log(notas.length); // Escribe 4
console.log(notas);
for (let i = 0; i < 10; i++) {
    notas.push(i);
}
let nombres = ["laura", "pedro", "julio"];
nombres.push("eva");
let cosas = ["laura", 2, true, ""];
console.log(nombres[0]); // Escribe laura
nombres[6] = "sandra"; // nombres[4] y nombres[5] serán undefined
console.log(nombres);

const numeros = [1, 2, 4];
numeros[0] = 10;
// numeros = [10, 6, 8]; // error: no puede asignar un nuevo array
numeros.push(8); // el array quedaría así: [10, 2, 4, 8]
numeros.unshift(3); // el array quedaría así: [3, 10, 2, 4, 8]
numeros.pop(); // el array quedaría así: [3, 10, 2, 4]
numeros.shift(); // el array quedaría así: [10, 2, 4]
numeros.splice(1, 1); // el array quedaría así: [10, 4]
console.log(numeros);
numeros.splice(0); // el array quedaría así : []
console.log(numeros);






