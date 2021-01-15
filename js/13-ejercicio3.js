'use strict'

/*
hacer un programa que muestre todos los numeros 
entre 2 numeros introducidos por el usuario
*/

var numero2 = prompt('introduce el segundo numero');

for (var numero1 = prompt('introduce el primer numero'); numero1 <= numero2; numero1++) {
    console.log(numero1);
}
