'use strict'

// este evento permite que al carga toda la pagina html carga todo el JS
window.addEventListener('load', () => {
    
    // eventos del raton

    function cambiarColor(params) {
        var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        return true;
    }

    var boton = document.querySelector("#boton");

    // click: cuando se presiona
    boton.addEventListener('click', function () {
        cambiarColor();
        console.log(this);
        this.style.border = "10px solid black";
    });

    // mouse over: cuando el mouse esta encima
    boton.addEventListener('mouseover', function() {
        boton.style.background = "yellow";
    });

    // mouse out: cunado el mouse esta fuera
    boton.addEventListener('mouseout', function() {
        boton.style.background = "#ccc";
    });

    // focus: cuando entras al input
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('focus', function() {
        console.log("[focus] estas haciendo focus en el input");
    });

    // blur: cuando sales del input
    input.addEventListener('blur', function() {
        console.log("[blur] estas haciendo blur en el input");
    });

    // keydown: cuando pulsas una letra
    input.addEventListener('keydown', function(event) {
        console.log("[keydown] estas haciendo keydown en el input");
        // capturar la letra que presionas
        console.log("Estas pulsando: ", String.fromCharCode(event.keyCode));
    });

    // keypress: luego de presionar la tecla
    input.addEventListener('keypress', function(event) {
        console.log("[keydown] tecla presionada", String.fromCharCode(event.keyCode));
    });

    // keyup: cuando suelto la tecla
    input.addEventListener('keyup', function(event) {
        console.log("[keyup] tecla soltada", String.fromCharCode(event.keyCode));
    });    
});

