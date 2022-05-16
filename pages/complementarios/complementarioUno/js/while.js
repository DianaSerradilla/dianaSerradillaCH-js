let botonComienzo = document.querySelector("#comienzoEjercicio");

botonComienzo.addEventListener("click", ejercicio)
function ejercicio() {
  let num = parseInt(prompt("Ingrese su número"));
  let numSuerte = 33;
  let condicion = false;
  let i = 1;

  console.log(numSuerte)
  while (isNaN(num)) {
    num = prompt("Debe ingresar un número, reintente.");
  }


  while (num != numSuerte) {
    num = prompt("¡Que pena! Ha fallado, intente.");
    i++;
    if (i >= 10) {
      condicion = true;
      break;
    }
  }

  if (condicion == true) {
    alert("¡HA PERDIDO EL JUEGO!")

  } else {
    alert("¡HA GANADO EL JUEGO!")

  }
};


