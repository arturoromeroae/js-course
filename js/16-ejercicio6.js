'use strict'

/*
que nos diga si es par o impar
1. ventana que pida el numero
2. si el numero no es valido que lo pida de nuevo
*/

var numero = parseInt(prompt('introduce un numero'));

while (isNaN(numero)) {
    numero = parseInt(prompt('introduce un numero'));
}

if (numero % 2 == 0) {
    alert('es un numero par');
}else{
    alert('es impar');
}