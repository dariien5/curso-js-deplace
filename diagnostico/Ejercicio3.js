//Realizar un script llamado Ejercicio3.js, que dado un array, ordene sus valores de menor a mayor y los muestre por pantalla.

let array = []
let longitud = parseInt(prompt("¿Cuántos items tendrá el array?"));
let resultado;

for(var i = 0; i < longitud; i++)
    array.push(prompt(`Ingresa el item número ${i}`));

console.log(`El array ingresado es [${array}]`);
array.sort((a,b)=>a-b);
console.log(`El array ordenado es [${array}]`);

prompt("Message", +array+"and other values");
