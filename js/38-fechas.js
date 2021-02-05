
var fecha = new Date();
var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDay();
var hour = fecha.getHours();
var minutes = fecha.getMinutes();

var textoHora = `
    el año es: ${year}
    el mes es: ${month + 1}
    el dia es: ${day}
    la hora es: ${hour}:${minutes}
`

console.log(textoHora);
console.log(Math.ceil(Math.random() * 100000));
