'use strict'

var formulario = document.querySelector("#form_peliculas");

formulario.addEventListener('submit', function() {
    var titulo = document.querySelector("#addpelicula").value;
    if (titulo.length > 0) {
        localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector("#pelicula_list");
for (var i in localStorage) {
    console.log(localStorage[i]);
    if (typeof localStorage[i] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li) 
    }
}

var formulario_borrar = document.querySelector("#form_borrar_peliculas");

formulario_borrar.addEventListener('submit', function() {
    var titulo = document.querySelector("#borrarpelicula").value;
    if (titulo.length > 0) {
        localStorage.removeItem(titulo);
    }
});
