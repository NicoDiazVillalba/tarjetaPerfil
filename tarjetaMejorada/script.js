var boton = document.getElementById("botonCambio");

function cambiarTexto(){

    var texto = document.getElementById("descripcion");
    var nuevoTexto = "Estoy buscando oportunidades laborales que me permitan desarrollar mis habilidades en programación y bases de datos";
    texto.textContent = nuevoTexto;
}

boton.addEventListener("click",cambiarTexto);