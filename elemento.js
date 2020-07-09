
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window *//*
(function () {
    "use strict";
    if (typeof window !== "undefined" && window.addEventListener) {
        var cache = Object.create(null); // holds xhr objects to prevent multiple requests
        var checkUseElems;
        var tid; // timeout id
        var debouncedCheck = function () {
            clearTimeout(tid);
            tid = setTimeout(checkUseElems, 100);
        }; */
// evita disfuncion js jquery
if (typeof module === "object" && typeof module.exports === "object") {
    // CommonJS/Node
} else {
    // window
    window.jQuery = window.$ = require('jquery');
}

$(document).ready(function mostrarMensaje1() {
    alert('La variable precio vale: ');
});

$(document).ready(function mostrarMensaje2() {
    alert('Ha hecho click sobre el párrafo inferior');
});
var h = document.head; // La variable h contiene el objeto head del DOM
console.log(h);

var b = document.body; // La variable b contiene el objeto body del DOM
console.log(b);
// Event boton funcion
$(document).ready(function clic() {
    console.log("Has hecho clic en el botón");

    var boton = document.getElementById("boton");
    boton.addEventListener("click", clic);
});
// activa boton
//var boton = document.getElementById("boton");
// Adición de un gestor de eventos 'click'
//boton.addEventListener("click", function () {
//   console.log("Has hecho clic en el botón");
//});
//realiza la validacion de el parametro Form
$(document).ready(function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
});
//REALIZA COMENTARIOS EN EL parametro span
var nombreElt = document.getElementById("nombre");
nombreElt.valueEventListener = ("focus", function () {
    document.getElementById("ayudanombre").textContent = "Introduce tu usuario";
})
nombreElt.valueEventListener = ("blur", function (e) {
    document.getElementById("ayudanombre").textContent = "";
})
var claveElt = document.getElementById("clave");
claveElt.valueEventListener = ("focus", function () {
    document.getElementById("ayudaclave").textContent = "Introduce tu clave";
})
claveElt.valueEventListener = ("blur", function (e) {
    document.getElementById("ayudaclave").textContent = "";
})
var emailElt = document.getElementById("email");
emailElt.valueEventListener = ("focus", function () {
    document.getElementById("ayudamail").textContent = "Direcciom email";
})
emailElt.valueEventListener = ("blur", function (e) {
    document.getElementById("ayudaemail").textContent = "";
})
//casillas de seleccion checked
document.getElementById("confirmacion") = ("change", function (e) {
    console.log("Enviar Email de confirmacion: " + e.target.checked);
})
document.getElementById("suscripcion").forEach(function (element) {
    element.addEventListener("change", function (event) {
        console.log("Suscripcion Elegida" + event.target.value);
    });
});
document.getElementById("nacionalidad").addEventListener("change", function (e) {
    console.log("Nacionalidad:" + event.target.value);
})

$(document).ready(function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
});
//Realiza onclick una llamada 
$(document).ready(function changeText(id) {
    id.innerHTML = "Ooops!";
});
$(document).ready(function displayDate() {
    document.getElementById("demo").innerHTML = Date();
});
// codigo para leer galeria foto a la vez al pulsar un boton
$(document).ready(function (e) {
    var pos = 0;
    var img1 = { src: '/static/ciencia/img/mod1.jpg' };
    var img2 = { src: '/static/ciencia/img/mod2.jpg' };
    var img3 = { src: '/static/ciencia/img/mod3.jpg' };
    var images = [img1, img2, img3]; //Aqui deberas meter los objetos (que después serán imágenes) que desees que se muestren
    for (var i = 0; i < images.length; i++) {
        var img = new Image(); //Creamos una imagen
        img.src = images[i].src; //Le metemos en el src la url del objeto
        images[i] = img; //Metemos la variable en forma de imagen (convertimos el objeto en una imagen)
    }

    $('#image').empty().append(images[pos]); //Inicialmente cargamos la primera imagen

    $("#cambiar").click(function () {
        pos++; //Sumamos una posición en el array
        if (pos > images.length - 1) { pos = 0; } //Si el valor de pos es mayor que la posición máxima del array volvemos a 0
        $('#image').empty().append(images[pos]); //Limpiamos el div y le metemos la nueva imagen
    });
});
// intento realizar el cambio de texto

const miTest = document.querySelector('h3');
miTest.textContent = '¡Hola Felicidades!';



/*  NO ENCUENTRA la direccion js por lo cual solo lo puede ejecutar en la pagina base
$(document).ready(function alerta() {
    var mensaje;
    var opcion = prompt("Anota tu Nombre", "LuisRed");
    if (opcion == null || opcion == "") {
        mensaje = "ME HAS DADO UN DATO VACIO";
    } else {
        mensaje = "hola " + opcion;
    }
    document.getElementById("ejemplo").onclick = alerta;
});*/

var miBoton = document.querySelector("button");
var miTitulo = document.querySelector("h1");

$(document).ready(function esUsuario() {
    var miNombre = prompt("Ingresa tu Nombre");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "JAVAASCRIPT, " + miNombre;
    if (!localStorage.setItem == "nombre") {
        esUsuario();
    }
    else {
        let nombreAlmcenado = localStorage.setItem("nombre");
        miTitulo.textContent = "javascript," + nombreAlmcenado;
    }
    miBoton.onclick = function () {
        esUsuario();
    }
});


