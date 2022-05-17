let buttonAgregar = document.querySelector("#buttonAgregar");
let buttonEliminarP = document.querySelector("#buttonEliminarP");
let buttonEliminarU = document.querySelector("#buttonEliminarU");
let buttonVTwo = document.querySelector("#botonDesafioDos");
buttonAgregar.addEventListener("click", capturar);
buttonEliminarP.addEventListener("click", eliminarP);
buttonEliminarU.addEventListener("click", eliminarU);
function capturar() {
  //console.log("capturado");
  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }
  var nombreCapturado = document.getElementById("nombre").value;
  var edadCapturada = document.getElementById("edad").value;
  nuevoAlumno = new Persona(nombreCapturado, edadCapturada);
  console.log(nuevoAlumno)
  if ((nombreCapturado == "") || (edadCapturada == "")) {
    alert("No ha ingresado datos, reitente.")
  } else {
    if (isNaN(nombreCapturado)) {
      agregar();

    } else {
      alert("No debe ingresar números en el nombre, reitente.")

    }
  }
}

let baseDatos = [];
function agregar() {
  baseDatos.push(nuevoAlumno);
  console.log(baseDatos);
  tabla = document.getElementById("tabla");
  tabla.innerHTML += '<tbody><td class="baseDatos">' + nuevoAlumno.nombre + '</td><td class="baseDatos">' + nuevoAlumno.edad + '</td></tbody>';

};



function eliminarP() {
  baseDatos.shift();
  console.log(baseDatos);
  // alert("funcioan");
  tabla.removeChild(tabla.children[1]);

}

function eliminarU() {
  baseDatos.pop();
  console.log(baseDatos);
  // alert("funcioan");
  tabla.removeChild(tabla.children[baseDatos.length + 1]);
  // console.log(baseDatos.length);
}

















