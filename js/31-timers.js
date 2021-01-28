'use strict'

window.addEventListener('load', () => {
    // *******TIMERS*******

    // ********set interval: permite ejecutar una funcion o un trozo de
    // codigo un tiempo de x segundos indefinidamente*******

    function intevalo() {
        var tiempo = setInterval(function() {
            console.log("set interval ejecutado");
    
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.fontSize = "50px";
            }
    
        }, 1000);
        
        return tiempo;
    }

    var tiempo = intevalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function() {
        alert("se detuvo el timer");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", function() {
        alert("se inicio el timer");
        intevalo();
    });
    
    // *******set time out: solo se ejecuta 1 vez en un tiempo determinado*******

    // var tiempo = setTimeout(function() {
    //     console.log("set time out ejecutado");

    //     var encabezado = document.querySelector("h1");
    //     if (encabezado.style.fontSize == "50px") {
    //         encabezado.style.fontSize = "30px";
    //     }else{
    //         encabezado.style.fontSize = "50px";
    //     }

    // }, 1000);

});
