'use strict'

// fetch (ajax) y peticiones a servicios  / apis rest
var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json()) // capturamos los datos y los convertimos a json
    .then(users => {
        usuarios = users;        // tomamos los valores y los asignamos
        console.log(usuarios);
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');

            nombre.innerHTML = 'nombre: ' + user.name + " - " + "username: " + user.username;

            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = 'none';
        });
    });

