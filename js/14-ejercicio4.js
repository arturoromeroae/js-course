'use strict'
/*
mostrar todos los numeros impares que hay
entre 2 numeros introducidos por el usuario
*/

var numero1 = prompt('introduce el numero inicial')
var numero2 = prompt('introduce el numero final');

while (numero1 < numero2) {
    numero1++;

    if (numero1 % 2 != 0) {
        console.log('el numero ' + numero1 + ' es impar');
    }
}
