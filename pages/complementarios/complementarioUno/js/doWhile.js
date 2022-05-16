let botonComienzo = document.querySelector("#comienzoEjercicio");

botonComienzo.addEventListener("click", ejercicio)
function ejercicio() {
  let cantidadAlumnos = parseInt(prompt("Ingrese su cantidad de alumnos"));
  let porAprobados, porDesaprobados, aprobados, desaprobados;
  aprobados = 0;
  desaprobados = 0;
  let i = 0;
  while (isNaN(cantidadAlumnos)) {
    cantidadAlumnos = prompt("Debe ingresar un número, reintente.");
  }

  do {

    let nota = parseFloat(prompt("Ingrese la nota del alumno número " + (i + 1)));
    i++;
    if (nota >= 6) {
      aprobados++;
    } else {
      desaprobados++;

    }
  } while (i < cantidadAlumnos);

  console.log(cantidadAlumnos)
  console.log(i)

  porAprobados = (aprobados * 100) / cantidadAlumnos;
  porDesaprobados = (desaprobados * 100) / cantidadAlumnos;
  console.log("Aprobados: " + porAprobados + "% del curso.");
  console.log("Desaprobados: " + porDesaprobados + "% del curso.");

};


