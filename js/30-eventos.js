'use strict'

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

// click
boton.addEventListener('click', function () {
    cambiarColor();
});

// mouse over
boton.addEventListener('mouseover', function() {
    boton.style.background = "yellow";
})

// mouse out
boton.addEventListener('mouseout', function() {
    boton.style.background = "#ccc";
})

