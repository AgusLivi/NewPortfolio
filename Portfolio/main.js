// Función que cambia las clases cuando se hace clic en un enlace de navegación
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.classList.remove("seleccionado"));
    link.classList.add("seleccionado");

    // Hacemos desaparecer el menú una vez que se ha seleccionado una opción en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

// Función que muestra el menú responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Detecto el desplazamiento para aplicar la animación de la barra de habilidades y cambiar las clases de navegación
window.onscroll = function() {
    efectoHabilidades();
    actualizarNavegacion();
};

// Función que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}

// Función que actualiza las clases de navegación al desplazarse
function actualizarNavegacion() {
    var secciones = document.querySelectorAll('section');
    var opciones = document.querySelectorAll('#links a');

    secciones.forEach((seccion, index) => {
        var rect = seccion.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
            opciones.forEach(opcion => opcion.classList.remove("seleccionado"));
            opciones[index].classList.add("seleccionado");
        }
    });
}