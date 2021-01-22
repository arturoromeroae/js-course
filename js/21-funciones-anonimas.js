'use strict'

// funciones anonimas
// es una funcion que no tiene nombre

var pelicula = function(nombre) {
    return "la pelicula es: " + nombre;
}

// callback es una funcion dentro de otra

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

console.log(sumame(1, 4, function(dato) {
    console.log("la suma es: ", dato);
}, function(dato) {
    console.log("la suma es: ", dato * 2);
}));

// funcion flecha

// dato => { ... }