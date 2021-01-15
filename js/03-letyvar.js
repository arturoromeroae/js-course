'use strict'
// pruebas con let y var

// prueba con var
var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// prueba con let
var texto = 'curso de JS';
console.log(texto); // valor js

if (true) {
    let texto = "curso de php";
    console.log(texto); // valor php
}

console.log(texto); // valor js