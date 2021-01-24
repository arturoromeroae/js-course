'use strict'

// plantillas de texto
var nombre = prompt('intrduce tu nombre');
var apellido = prompt('introduce tu apellido');

// var texto = "mi nombre es: " + nombre + "mis apellidos son: " + apellido;
var texto = `
    <h1>hola que tal</h1>
    <h3>mi nombre es ${nombre}</h3>
    <h3>mi apelllido es ${apellido}</h3>
`;
document.write(texto);
