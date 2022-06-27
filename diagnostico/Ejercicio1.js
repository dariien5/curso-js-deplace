//Realizar un script llamado Ejercicio1.js, que contenga una función llamada CantidadMayusculas que reciba como parámetro un string y devuelva el número de letras mayúsculas que contiene dicha cadena. El valor devuelto debe ser mostrado en pantalla.

function CantidadMayusculas (palabra){
    let palabraNoSpaces = palabra;
    palabraNoSpaces = palabraNoSpaces.replace(/\s/g, "");
    //console.log(`La frase tiene ${palabraNoSpaces} mayúsculas.`);

    let resultado = 0;
    let cantidadLetras = palabraNoSpaces.length;

    for (let i = 0; i < cantidadLetras; i++){
        if(/[A-Z]/.test(palabraNoSpaces.charAt(i))) resultado++;
    }

    if (resultado == 0){
        console.log(`Tu frase no cuenta con letras mayúsculas.`);
    }
    else if (resultado == 1){
        console.log(`La frase tiene solamente ${resultado} letra mayúscula.`);
    }
    else {
        console.log(`La frase tiene ${resultado} letras mayúsculas.`);
    }

}