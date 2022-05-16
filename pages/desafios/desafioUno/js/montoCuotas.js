let activarEjercicio = document.querySelector("#activarEjercicio");
activarEjercicio.addEventListener("click", activar);

function activar() {
  const ingresoMonto = function () {
    let montoTotal = parseInt(prompt("Ingrese monto total a pagar"));

    while (isNaN(montoTotal) || (montoTotal === null)) {
      montoTotal = parseInt(prompt("Debe ingresar un número, reintente."));
    }
    return montoTotal;
  }

  const ingresoCuotas = function () {
    let cantCuotas = parseInt(prompt("Seleccione entre 3,6 o 9 cuotas"));
    while ((isNaN(cantCuotas)) || (cantCuotas != 3) && (cantCuotas != 6) && (cantCuotas != 9)) {
      cantCuotas = parseInt(prompt("Recuerde que debe seleccione entre 3,6 o 9 cuotas. Vuelva a intentar"));
    }
    return cantCuotas;
  }


  const calculoCuotas = function () {
    let monto = ingresoMonto();
    let cantC = ingresoCuotas();
    let montoDividido;
    switch (cantC) {
      case 3:
        montoDividido = Math.round(monto / cantC);
        console.log("El monto dividido en 3 cuotas es: $" + montoDividido);
        break;
      case 6:
        montoDividido = Math.round(monto / cantC);
        console.log("El monto dividido en 6 cuotas es: $" + montoDividido);
        break;
      case 9:
        montoDividido = Math.round(monto / cantC);
        console.log("El monto dividido en 9 cuotas es: $" + montoDividido);
        break;
    }
  }
  calculoCuotas();
}


let buttonMostrar = document.querySelector("#buttonMostrar");
buttonMostrar.addEventListener("click", calcularMontos);

function calcularMontos() {
  let monto = document.querySelector("#monto").value;
  let cuotas = document.querySelector("#cuotas").value;
  let montoDividido;

  if ((monto == 0) || (monto < 1)) {
    document.getElementById("resultadoText").innerHTML = "No ha ingresado un monto o ha ingresado un monto negativo, recarge la página y reintente.";
  } else {
    switch (cuotas) {
      case "3":
        montoDividido = Math.round(monto / cuotas);
        console.log("El monto $" + monto + " dividido en 3 cuotas es: $" + montoDividido);

        document.getElementById("resultadoText").innerHTML = "El monto $" + monto + " dividido en 3 cuotas es: $" + montoDividido;

        break;
      case "6":
        montoDividido = Math.round(monto / cuotas);
        console.log("El monto $" + monto + " dividido en 6 cuotas es: $" + montoDividido);
        document.getElementById("resultadoText").innerHTML = "El monto $" + monto + " dividido en 6 cuotas es: $" + montoDividido;

        break;
      case "9":
        montoDividido = Math.round(monto / cuotas);
        console.log("El monto $" + monto + "dividido en 9 cuotas es: $" + montoDividido);
        document.getElementById("resultadoText").innerHTML = "El monto $" + monto + " dividido en 9 cuotas es: $" + montoDividido;

        break;
    }
  }

}
