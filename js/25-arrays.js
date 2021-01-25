'use strict'

// arrays, arreglos o matrices
// son una coleccion de datos agrupados

var nombre = "arturo romero";
var nombres = ["arturo", "jose", "pedro", "andres", 12, true];
//                          0      1     2      3
var lenguajes = new Array("php", "js", "go", "java", "c#", "c", "pascal");
/*
console.log(nombres.length);
console.log(lenguajes);
var elemento = prompt('intrdoduce el array que quieres', 0);

if (elemento >= nombres.length) {
    alert('introduce un numero correcto');
}else{
    alert("el usuario seleccionado es: " + nombres[elemento]);
}
*/

document.write("<h1>lenguajes del 2021</h1>");
document.write("<ul>");
// *********** Iteraciones y recorrer arrays 1 ***********
// for (let i = 0; i < lenguajes.length; i++) {
//     document.write("<li>" + lenguajes[i] + "</li>");
    
// }
// *********** Iteraciones y recorrer arrays 2 ***********
// lenguajes.forEach((elemento, index, array)=>{
//     console.log(array);
//     document.write("<li>" + index + ' - ' + elemento + "</li>");
// })
// *********** Iteraciones y recorrer arrays 3 ***********
for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

var precios = [10, 20, 30, 50, 60];
// busquedas en arrays
var busqueda = lenguajes.find(lenguaje => lenguaje == "php");
// buscar indice de un elemento en el array
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "php");
// flitro si existen valores >, <, ==, entre otros
var busqueda = precios.some(precio => precio < 10);

console.log(busqueda);

document.write("</ul>");
