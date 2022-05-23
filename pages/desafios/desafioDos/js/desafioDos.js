

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
  constructor(sticker) {
    this.id = sticker.id;
    this.nombre = sticker.nombre;
    this.categoria = sticker.categoria;
    this.img = sticker.img;
    this.precio = sticker.precio;
    this.tags = sticker.tags;
    this.stock = sticker.stock;
    this.precioTotal = sticker.precioTotal;
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
let cantidadTCarrito = document.getElementById("carrito-totalCantidad");
let precioTCarrito = document.getElementById("carrito-totalPrecio");
let cantidadContador=0;
let precioTotal=0;




function comprar(stickerID){  
  // console.log("funca")
  cantidadContador++;
  cantidadTCarrito.innerHTML= cantidadContador;
  console.log(stickerID);

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Has añadido un elemento al carrito',
    showConfirmButton: false,
    timer: 1500
  })


  impresiones.forEach(sticker => {
    if(sticker.id == stickerID){ 
        precioTotal+= sticker.precio;
    }
    
  });

  precioTCarrito.innerHTML = precioTotal;
};



function imprimirStickers(impresiones) {
  let contenedor = document.getElementById("contenedor");
  for (const sticker of impresiones) {
    let card = document.createElement("div");
    card.innerHTML =
      `<div class="containerProduct" >
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
                  
                  <li id="agregar${sticker.id}" class="cart" title="Comprar"><i class="fa fa-shopping-cart"></i></li>
                  <li id="love" title="Guardar"><i class="fa fa-heart"></i></li>
                </ul>
              </div>
            </div>
          </div>`;

    contenedor.appendChild(card);
    let buttonAdd = document.getElementById(`agregar${sticker.id}`)
    buttonAdd.addEventListener("click", () => comprar(sticker.id));
  }


}





imprimirStickers(impresiones);





// for (const index in impresiones) {
//   buttonAdd[index].addEventListener("click", comprar);
// }


