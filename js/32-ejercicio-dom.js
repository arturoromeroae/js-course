'use strict'

window.addEventListener('load', function() {
    console.log("dom cargado");

    var formulario = document.getElementById("form");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    // **************** opcion 2 ****************
    formulario.addEventListener('submit', function() {
        console.log('evento submit capturado');

        var nombre = document.querySelector('#name').value;
        var apellido = document.querySelector('#last_name').value;
        var edad = parseInt(document.querySelector('#age').value);

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("el nombre no es valido");
            document.querySelector("#error_nombre").innerHTML = "el nombre no es valido";
            return false;
        }else{
            document.querySelector("#error_nombre").display = "none";
        }

        if (apellido.trim() == null || apellido.trim().length == 0) {
            alert("el apellido no es valido");
            return false;
        }

        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("la edad no es valida");
            return false;
        }

        box_dashed.style.display = 'block';

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");
        
        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;
    });

    // **************** opcion 1 ****************
    // formulario.addEventListener('submit', function() {
    //     console.log('evento submit capturado');

    //     var nombre = document.querySelector('#name').value;
    //     var apellido = document.querySelector('#last_name').value;
    //     var edad = document.querySelector('#age').value;

    //     box_dashed.style.display = 'block';

    //     var datos_usuarios = [nombre, apellido, edad];
    //     var datos;

    //     for (datos in datos_usuarios) {
    //         var parrafo = document.createElement("p");
    //         parrafo.append(datos_usuarios[datos]);
    //         box_dashed.append(parrafo);
    //     }
    // });
});
