var boton = document.getElementById("botonCambio");

function cambiarTexto(){

    var texto = document.getElementById("descripcion");
    var nuevoTexto = 
    "Estoy buscando oportunidades laborales que me permitan desarrollar-" +
    "mis habilidades en programación y bases de datos diaznicovillalba@gmail.com - ndiazvi35180@universidadean.edu.co";
    texto.textContent = nuevoTexto;
    alert("La información ha sido actualizada :D")
}

boton.addEventListener("click",cambiarTexto);