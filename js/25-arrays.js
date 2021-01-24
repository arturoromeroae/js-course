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
// for (let i = 0; i < lenguajes.length; i++) {
//     document.write("<li>" + lenguajes[i] + "</li>");
    
// }

lenguajes.forEach((elemento, index, array)=>{
    console.log(array);
    document.write("<li>" + index + ' - ' + elemento + "</li>");
})

document.write("</ul>");
