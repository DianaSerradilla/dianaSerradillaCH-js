

//Proyecto Final

//Sera un ecommerce pero con roles
//  ---Rol administrador
// ---Rol comprador 

//Funciones que debería realizar el sistema y sus pantallas

//ADMIN

//Funciones admin 
//Revisar stock
//CRUD stock
//Cantidad de ventas (estadistica)


//Pantalla Login
//Login para administrador

//Pantalla stock
//Ver tus productos en venta con sus datos
//Modificar datos de estos productos
//Cargar nuevos productos


//Pantallas estadisticas
//Ver que productos se han vendido más 


//COMPRADOR

//Funciones comprador
// Ver y comprar stickers
//Pantalla index con productos para comprar
//Ver todos los productos
//Boton para comprar, el cual debe estar deshabilitado si el stock está en cero
//Comprar
//Lupa 

//Pantala checkout
//Ver total de compra, monto y cantidad de productos
//Borrar del carrito de compras algun item
//Boton pagar



// Orden del código
// Clases
// Variables
// Funciones
// Ejecución del código



class Sticker {
  constructor(id, nombre, categoria, img, precio, tags, stock) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.img = img;
    this.precio = precio;
    this.tags = tags;
    this.stock = stock;
  }

  disminuirStock(cantidad) {
    this.stock = stock - cantidad;
  }

  aumentarStock(cantidad) {
    this.stock = stock + cantidad;
  }


}



const impresiones = [
  {
    id: 01,
    nombre: "Loki",
    categoria: "peliculas",
    img: "../../../../assets/products/loki.jpg",
    precio: 150,
    tags: "Avengers",
    stock: 2,
  },
  {
    id: 02,
    nombre: "Vans",
    categoria: "ropa",
    img: "../../../../assets/products/vans.jpg",
    precio: 100,
    tags: "Moda",
    stock: 3,
  },
  {
    id: 03,
    nombre: "Sea",
    categoria: "natural",
    img: "../../../../assets/products/sea.jpg",
    precio: 250,
    tags: "Naturaleza",
    stock: 7,
  },
  {
    id: 04,
    nombre: "Heart",
    categoria: "humanos",
    img: "../../../../assets/products/heart.jpg",
    precio: 350,
    tags: "Humano",
    stock: 10,

  },

];

let carrito = [];
let carritoReal = document.getElementById("carrito");
let buttonAdd = document.getElementById("prueba");


function imprimirStickers(impresiones) {

  let contenedor = document.getElementById("contenedor");


  for (const sticker of impresiones) {
    let card = document.createElement("div");

    card.innerHTML =
      `<div class="containerProduct">
            <div class="content">
              <div id="product" class="card">
                <span class="numberproduct"># ${sticker.id}</span>
                <div class="cover">

                  <img
                    src="https://lh3.googleusercontent.com/proxy/HzsKDwNIgfC7MMfj6W2eMe4Hnv5_FAni8owZLYBrOllwV2MOfKtt3h5QQrC7XD8nr6NHcCu3_oS0W2m8DZCFuAfb9P0UnN8V2aJjG2hNrd2Tgoq6D8BhDbvijRintMheemeh"
                    alt="">
                </div>
                <div class="details">
                  <h2>${sticker.nombre}</h2>
                  <img src="${sticker.img}" alt="">
                  <p>${sticker.categoria}</p>
                   <p>$ ${sticker.precio}</p>
                   <p>Stock: ${sticker.stock}</p>
                   
                </div>
                <!--Modals icons cart-->
                <ul class="shoppintcart">
                  
                  <li id="cart" title="Comprar"><i class="fa fa-shopping-cart"></i></li>
                  <li id="love" title="Guardar"><i class="fa fa-heart"></i></li>
                </ul>
              </div>
            </div>
          </div>`;

    contenedor.appendChild(card);
  }
}



imprimirStickers(impresiones);

buttonAdd.addEventListener('click', function () {
  console.log("Hola");
})
