'use strict'

// transformacion de textos
var numero = 565;
var texto1 = "bienvenidos al curso de js";
var texto2 = "es muy buen curso";

// var dato = numero.toString();
// dato = texto1.toUpperCase();
// dato = texto2.toLowerCase();
// console.log(dato);

// // calcular longitud
// var nombre = "arturo romero";
//     nombre = ["hoa", "hola"];
// console.log(nombre.length);

// // concatenar - unir textos
// var textoTotal = texto1 + " " + texto2;
// textoTotal = texto1.concat(" " + texto2);
// console.log(textoTotal);
 var busqueda = texto1.indexOf("curso");
 busqueda = texto1.lastIndexOf("curso");
 busqueda = texto1.search("curso");
 // solo busca la primera coincidencia
 busqueda = texto1.match("curso");
 // busca todas las coincidencias
 busqueda = texto1.match(/curso/g);
// sebstrae texto desde y hasta los num indicados
 busqueda = texto1.substr(14, 5);
// substrae la letra indicada
 busqueda = texto1.charAt(10);
// busca si existe al inicio (true o false)
 busqueda = texto1.startsWith("bi");
 busqueda = texto1.endsWith("js");
// busca una palabra (true o false)
busqueda = texto1.includes("juan");
// remplazar texto
busqueda = texto1.replace("curso", "estudio");
// separa o corta un string
busqueda = texto1.slice(14, 22);
// recorta palabras y meter en un array
busqueda = texto1.split(' ');
// quita espacios en un string
busqueda = texto1.trim();

console.log(busqueda);