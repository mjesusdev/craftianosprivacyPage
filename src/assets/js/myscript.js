const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

$(function () {
    let mensajeCookies = $("#alertCookies");
    let contenido = $(".footer");
    let enlaces = $(".enlaces");
    let cookies = $("#cookies");
    let etiquetasFooter = `<p class='text-justify text-center'>Todos los derechos reservados © Craftianos 2021 
            <img src='./images/iconos/arrow.svg' class='go-up figure-img img-fluid rounded mt-2' />
        </p>`;
    let enlacesFooter = `<ul class="nav nav-pills justify-content-center enlacesfooter">
            <li class="nav-item">
                <a class="nav-link" href="#">Uso de cookies 🍪</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../redes/">Contacto 📥</a>
            </li>
        </ul>`;
    mensajeCookies.on("closed.bs.alert", () => {
        cookies.addClass("accepted"),
        contenido.css("color", "#e8ffe8"),
        contenido.html(etiquetasFooter),
        enlaces.css("color", "#e8ffe8"),
        enlaces.html(enlacesFooter),
        cookies.hasClass("accepted") ? localStorage.setItem("cookies", "true") : localStorage.setItem("false", "true");
    }),
    "true" == localStorage.getItem("cookies") ? (cookies.addClass("accepted"), contenido.css("color", "#e8ffe8"), contenido.html(etiquetasFooter), enlaces.css("color", "#e8ffe8"), enlaces.html(enlacesFooter)) : cookies.addClass("no");
});


/* document.readyState( function () {
    let mensajeCookies = document.getElementById("#alertCookies");
    let contenido = document.getElementsByClassName(".footer");
    let enlaces = document.getElementsByClassName(".enlaces");
    let cookies = document.getElementById("#cookies");
    let etiquetasFooter = `<p class='text-justify text-center'>
        Todos los derechos reservados © Craftianos 2021
            <img loading="lazy" src="../images/iconos/arrow.svg" class="go-up figure-img img-fluid rounded mt-2" />
        </p>`;
    let enlacesFooter = `<ul class="nav nav-pills justify-content-center enlacesfooter">
            <li class="nav-item <a class="nav-link" href="#">Uso de cookies 🍪</a></li>
            <li class="nav-item"><a class="nav-link" href="../redes/">Contacto 📥</a></li>
        </ul>`;
    
        mensajeCookies.on("closed.bs.alert", () => {
            cookies.addClass("accepted")
            contenido.css("color", "#e8ffe8")
            contenido.html(etiquetasFooter)

            enlaces.css("color", "#e8ffe8")
            enlaces.html(enlacesFooter)
            cookies.hasClass("accepted") ? localStorage.setItem("cookies", "true") : localStorage.setItem("false", "true")
        }),
        
        "true" == localStorage.getItem("cookies") ? (cookies.addClass("accepted"),
            contenido.css("color", "#e8ffe8"),
            contenido.html(etiquetasFooter),
            enlaces.css("color", "#e8ffe8"),
            enlaces.html(enlacesFooter)) : cookies.addClass("no")
}); */