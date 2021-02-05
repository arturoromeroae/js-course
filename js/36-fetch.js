'use strict'

// fetch (ajax) y peticiones a servicios  / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

    getUsuarios()
        .then(data => data.json()) // capturamos los datos y los convertimos a json
        .then(users => {        // tomamos los valores y los asignamos
            listadoUsuarios(users.data);

            return getUsuario()
        })
        .then(data => data.json())
        .then(user => {
            mostarJanet(user.data);

            return getInfo();
        })
        .then(data => {
            console.log(data);
        })
        // capturar errores en las promesas
        .catch(error => {
            console.log(error);
        })

function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getUsuario() {
    return fetch('https://reqres.in/api/users/2');
}

function getInfo() {
    var profesor = {
        nombre: 'Arturo',
        apellidos: 'Romero',
        url: 'https://google.com'
    };

    return new Promise((resolved, reject) => {
        var profesor_string = JSON.stringify(profesor);

        if (typeof profesor_string != 'string') return reject('error');

        return resolved(profesor_string);
    });
}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');
        let avatar = document.createElement('img');

        nombre.innerHTML = `<img src="${user.avatar}"><br>` + 
        ' nombre: ' + user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';

        div_usuarios.appendChild(nombre);
        div_janet.appendChild(avatar);

        document.querySelector(".loading").style.display = 'none';
    });
}

function mostarJanet(user) {

    let nombre = document.createElement('h4');

    nombre.innerHTML = `<img src="${user.avatar}"><br>` + 
    ' nombre: ' + user.first_name + " " + user.last_name;

    div_janet.appendChild(nombre);

    document.querySelector("#janet .loading").style.display = 'none';

}

