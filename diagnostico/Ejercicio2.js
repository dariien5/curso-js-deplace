//Realizar un script llamado Ejercicio2.js, que dado el array [1,2,3,4,5,7] realice una copia del array sumándole 1 a cada uno de los valores.

let array = [1,2,3,4,5,7];
let arrayCopia = array;
let resultado = [];

for (var i = 0; i < array.length; i++){
    resultado.push(array[i] + 1);
}

console.log(`El array original es [${array}]`);
console.log(`El nuevo array es [${resultado}]`);
