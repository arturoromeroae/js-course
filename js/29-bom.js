'use strict'

// BOM Browser Object Model

// tamaño de la ventana del navegador
function getBoom() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    // ver la url actual del navegador
    console.log(window.location);
    console.log(window.location.href);
}

function redirect(url) {
    window.location.href = url;
}

function abrirVentana(url) {
    window.open(url, "", "width = 400 height = 300");
}

getBoom();
// tamaño de pantalla
console.log(screen.width);
console.log(screen.height);
