'use strict'

/*
1- pida 6 numeros por pantalla y los meta en un array
2- mostrar el array entero en el cuerpo de la pagina y en la consola
3- ordenarlo y mostrarlo
4- invertir su orden y mostrarlo
5- mostrar cuantos elementos tiene el array
6- busqueda de 1 valor introducido por el usuario, indicar si esta y su posicion
*/

var numbers = '';
var lista = [];

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>contenido del array " + textoCustom + "</h1><ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li><strong>" + elemento + "</strong></li>");
    });
    document.write("</ul>");
}

// 1- pedir los numeros
do{
    var numbers = prompt('introduce un numero');
    lista.push(numbers);
}while (lista.length < 6)

// 2.1- mostrar en el cuerpo de pagina
mostrarArray(lista);

// 2.2- mostrar array por consola
console.log(lista);

// 4- invertir su orden y mostrarlo
lista.reverse();
mostrarArray(lista, "ordenado a la inversa");

// 3.1- ordenarlo alfabeticamente y mostrarlo
lista.sort();
mostrarArray(lista, "ordenado alfabeticamente");
// ordenarlo de manera numerica y mostrarlo
// 3.2- ordenarlo de menor a mayor
lista.sort(function(a, b){return a - b});
mostrarArray(lista, "ordenado de menor a mayor");
// 3.3- odenarlo de mayor a menor
lista.sort(function(a, b){return b - a});
mostrarArray(lista, "ordenado de mayor a menor");

// 5- cuantos elementos tiene el array
document.write("<h1>el array tiene " + lista.length + " elementos</h1>");

// 6- busqueda
var elemento_buscar = prompt('introduce el elemento a buscar')
var busqueda_indice = lista.findIndex(indice => indice == elemento_buscar);
var busqueda_existencia = lista.some(existe => existe == elemento_buscar);

if (busqueda_existencia) {
    document.write("<hr><h1>ENCONTRADO: </h1>");
    document.write("<h2>el indice es: " + busqueda_indice + "</h2><hr>");
}else{
    document.write("<hr><h1>ERROR NO SE ENCONTRO EL ELEMENTO!</h1><hr>");
}


