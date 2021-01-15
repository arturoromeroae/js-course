'use strict'

// condicional if
// si a es igual a b entonces haz algo

/*
operadores relacionales
mayor: >
menor: <
mayor o igual: >=
menor o igual: <=
igual: ==
distinto: !=
*/

// var edad1 = 12;
// var edad2 = 33;

// // si pasa esto
// if (edad1 > edad2) {
//     // ejecuta esto
//     console.log("edad1 es mayor que edad2");
// }else{
//     console.log("la edad1 es inferior");
// }

var edad = 27;
var nombre = "Arturo Romero";

if (edad >= 18) {
    console.log(nombre + " es mayor de edad");
    if (edad <= 33) {
        console.log("aun eres millenial");
    }else if(edad >= 70){
        console.log('eres anciano');
    }else{
        console.log("ya no eres millenial");
    }
}else{
    console.log(nombre + " es menor de edad");
}

/*
 operadores logicos
 AND(Y): &&
 OR(O): ||
 NEGACION: !
*/

var year = 2021;

// NEGACION

if (year != 2020) {
    console.log("no es el año 2020, realmente es: " + year);
}

// AND

if (year >= 2019 && year <= 2025) {
    console.log("estamos en la era actual");
}else{
    console.log("estamos en la era postmoderna");
}

// OR

if (year == 2018 || (year >= 2020 && year == 2028)) {
    console.log("el año comieza con un 2");
}else{
    console.log("año no registrado");
}
