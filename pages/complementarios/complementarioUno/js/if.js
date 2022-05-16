let botonComienzo = document.querySelector("#comienzoEjercicio");
let parrafoResultadoMayor = document.querySelector("#resultadoParrafoMayor");
let parrafoResultadoMenor = document.querySelector("#resultadoParrafoMenor");
botonComienzo.addEventListener("click", ejercicio)
function ejercicio() {
  let edad = parseInt(prompt("Ingrese su edad por favor"));
  if (edad >= 18) {
    // alert("Eres mayor de edad")
    parrafoResultadoMayor.style.display = "inline";
  } else {
    // alert("Eres menor de edad")
    parrafoResultadoMenor.style.display = "inline";


  }
};


