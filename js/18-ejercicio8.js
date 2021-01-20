'use strict'

/*
    calculadora que pida 2 numeros por pantalla
    si se mete mal un numero pida uno nuevamente
    mostrar resultado en el cuerpo, alerta y consola
*/

var numero1 = prompt('introduce el primer numero');
var numero2 = prompt('introduce el segundo numero');

while (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0) {
    numero1 = prompt('introduce el primer numero');
    numero2 = prompt('introduce el segundo numero');
}

var resultado = 'la suma es: ' + (numero1 + numero2) + '<br>' +
                'la resta es: ' + (numero1 - numero2) + '<br>' +
                'la division es: ' + (numero1 / numero2) + '<br>' +
                'la multiplicacion es: ' + (numero1 * numero2);

var resultadocmd = 'la suma es: ' + (numero1 + numero2) + ' \n' +
                'la resta es: ' + (numero1 - numero2) + ' \n' +
                'la division es: ' + (numero1 / numero2) + ' \n' +
                'la multiplicacion es: ' + (numero1 * numero2);

document.write(resultado);
alert(resultadocmd);
console.log(resultadocmd);
