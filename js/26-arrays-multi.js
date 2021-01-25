'use strict'

var categorias = ['accion', 'terror', 'comedia'];
var peliculas = ['batman', 'conjuro', 'si señor'];

var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

/*
var elemento = '';

do{
    elemento = prompt('agrega una pelicula');
    // agrega elemento a array
    peliculas.push(elemento);
}while (elemento != 'acabar');
// elimina el ultimo elemento de un array
peliculas.pop();
*/

var indice = peliculas.indexOf('conjuro');

if (indice > -1) {
    // elimina el elemento en la posicion indicada
    peliculas.splice(indice, 1);
}

// convertir array a texto
var texto = peliculas.join();

//convertir candena de texto en arrays
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ")

// odernar arrays alfabeticamente
peliculas.sort();
// ordena los arrays a la inversa
peliculas.reverse();
console.log(peliculas);
