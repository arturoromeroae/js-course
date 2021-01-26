'use strict'

// DOM - Document Object Model

function cambiaColor(color) {
    caja.style.background = color;
}

// CONSEGUIR ELEMENTOS POR UN ID CONCRETO

// var caja = document.getElementById("micaja");
// id = # clase = .
var caja = document.querySelector("#micaja");

// modificando texto de la pagina
caja.innerHTML = "texto desde JS";
// modificando estilo de la pagina
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
// modificando clase del html
caja.className = "hola";

// CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todosLosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

// todosLosDivs.forEach(element => {
var valor;
for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        // append añade despues
        parrafo.append(texto);
        // prepend añade antes
        document.querySelector("#miseccion").append(parrafo);
    }  
}
// });
seccion.append(hr);

// CONSEGUIR ELEMENTOS POR SU CLASE CSS

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

for (var div in divsRojos) {
    if (divsRojos[div].className == 'rojo') {
        divsRojos[div].style.background = 'red';   
    }
}

// query selector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);
// se seleccionan todas las etiquetas div
var etiqueta = document.querySelectorAll("div");
console.log(etiqueta);
