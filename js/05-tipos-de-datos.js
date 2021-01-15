'use strict'

// operadores
var numero1 = 7;
var numero2 = 8;
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var resto = numero1 % numero2;

alert('el resultado es: ' + resto);

// tipos de datos

var numero_entero = 1;
var cadena_de_texto = 'arturo';
var verdadero_o_falso = true; // o false o 0 (false) y 1 (true)

var numero_falso = "33.4";

Number(numero_falso + 7);

console.log(numero_falso + 7);
console.log(Number(numero_falso) + 7); // convertir en numero
console.log(parseInt(numero_falso) + 7); // convertir en numero entero
console.log(parseFloat(numero_falso) + 7); // convertir en numero de coma flotante
console.log(numero_entero + ' años'); // concatenando numero y texto
console.log(String(numero_entero) + 7); // convertir numero a texto

// saber el tipo de dato de la variable

console.log(typeof numero_entero);
