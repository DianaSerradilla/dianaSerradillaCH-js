

//Vamos a generar una "biblioteca" 
//Funciones:
//-Consultar libros disponibles 
//-Consultar todos los libros
//-Buscar por lupa
//-Pedir prestado
//-Devolver libro
//-Dar de baja libro
//-Dar de alta libro
//Tales funciones van a variar segun el rol del usuario
//Admin y visitador

let nombre = "";
let autor = "";
let tipo = "";
let anio = 0;
let estado = "";



class Libro {
  constructor(nombre, autor, anio, tipo, estado) {
    this.nombre = nombre.toUpperCase();
    this.autor = autor.toUpperCase();
    this.tipo = tipo.toUpperCase();
    this.anio = anio;
    this.estado = estado;
  }

  //Metodos


}


const libros = [
  {
    nombre: "Prueba 1",
    autor: "Prueba 1 Autor",
    anio: 1986,
    estado: "disponible"
  },
  {
    nombre: "Prueba 2",
    autor: "Prueba 2 Autor",
    anio: 1996,
    estado: "baja"
  },
  {
    nombre: "Prueba 3",
    autor: "Prueba 3 Autor",
    anio: 1971,
    estado: "prestado"
  }

];




function consultaDisponibles() {
  const librosDisponibles = libros.filter((libroD) => libroD.estado == "disponible");
  console.log(librosDisponibles)
}

console.table(libros);


function altaLibro() {
  nombre = prompt("Ingrese el nombre del libro");
  autor = prompt("Ingrese el autor del libro");
  tipo = prompt("Ingrese la categoria del libro");
  anio = prompt("Ingrese el año del libro");
  estado = "disponible";

  libros.push(new Libro(nombre, autor, tipo, anio, estado));
}

altaLibro();
console.table(libros);
// function consultarTitulo() {
//   let filtracion = prompt("Que titulo desea buscar?").toUpperCase();


// }

// consultaDisponibles();
// consultarTitulo();