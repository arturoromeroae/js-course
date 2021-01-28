'use strict'

window.addEventListener('load', function() {
    console.log("dom cargado");

    var formulario = document.getElementById("form");
    var box_dashed = document.querySelector(".dashed");

    box_dashed.style.display = 'none';

    formulario.addEventListener('submit', function() {
        console.log('evento submit capturado');

        var nombre = document.querySelector('#name').value;
        var apellido = document.querySelector('#last_name').value;
        var edad = document.querySelector('#age').value;

        box_dashed.style.display = 'block';

        var datos_usuarios = [nombre, apellido, edad];
        var datos;

        for (datos in datos_usuarios) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuarios[datos]);
            box_dashed.append(parrafo);
        }
    });
});
