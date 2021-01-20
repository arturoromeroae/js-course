'use strict'

/*
Tabla de multiplicar de un numero
introducido en pantalla.
*/

var numero = prompt('introduce un numero');

document.write('<h1>tabla del '+ numero +'</h1>');

for (let i = 0; i <= 10; i++) {
    var resultado = numero * i;
    document.write(numero + ' x ' + i + ' = ' + resultado + '<br>');
}

// Todas las tablas de mult.
for (let c = 0; c <= 10; c++) {
    document.write('<h1>tabla del '+ c +'</h1>');
    for (let i = 0; i <= 10; i++) {
        var resultado = c * i;
        document.write(c + ' x ' + i + ' = ' + resultado + '<br>');
    }
}
