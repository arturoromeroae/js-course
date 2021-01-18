'use strict'

/*
mostrar todos los numeros divisores de un numero 
introducido en prompt
*/

var numero = prompt('introduce el numero final');

for (var i = 1; i < numero; i++) {
    if (numero % i == 0) {
        console.log('divisor: ' + i);   
    }
    
}