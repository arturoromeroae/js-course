'use strict'

/*
    funciones
    es una agrupacion reutilizable de un conjunto
    de instrucciones que se ultilizan las veces que
    deseamos.
*/
// defino la funcion
function calculadora(numero1, numero2) {
    // conjunto de instrucciones a ejecutar
    console.log("suma: " + (numero1 + numero2));
    console.log("resta: " + (numero1 - numero2));
    console.log("multiplicacion: " + (numero1 * numero2));
    console.log("division: " + (numero1 / numero2));

    // return "hola soy la calculadora";
}
// invocar o llamar a la funcion
/*
for (let i = 1; i < 10; i++) {
    console.log(i);
    calculadora(i, 8);
}
*/