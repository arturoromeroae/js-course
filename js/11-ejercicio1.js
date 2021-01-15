'use strict'

/*
Progrma que pida 2 numeros y que nos diga cual es el mayor,
el menor y si son iguales.
PLUS: si los numeros no son un numero o son menores o iguales
a cero, pida que los introduzcas nuevamente.
*/

var numero1 = parseInt(prompt("Introduce un 1er numero"));
var numero2 = parseInt(prompt("Introduce un 2do numero"));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    var numero1 = parseInt(prompt("Introduce un 1er numero"));
    var numero2 = parseInt(prompt("Introduce un 2do numero"));
}

if (numero1 > numero2) {
    alert("el numero mayor es: " + numero1);
}else if (numero2 > numero1) {
    alert("el numero mayor es: " + numero2);
}else{
    alert("los numeros son iguales");
}
