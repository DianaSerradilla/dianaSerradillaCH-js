// Orden del código
// Clases
// Variables
// Funciones
// Ejecución del código



const impresiones = [
  {
    id: 01,
    nombre: "Loki",
    categoria: "peliculas",
    img: "../../../../assets/products/loki.jpg",
    precio: 150,
    tags: "Avengers",

  },
  {
    id: 02,
    nombre: "Vans",
    categoria: "ropa",
    img: "../../../../assets/products/vans.jpg",
    precio: 100,
    tags: "Moda",

  },
  {
    id: 03,
    nombre: "Sea",
    categoria: "natural",
    img: "../../../../assets/products/sea.jpg",
    precio: 250,
    tags: "Naturaleza",

  },
  {
    id: 04,
    nombre: "Heart",
    categoria: "humanos",
    img: "../../../../assets/products/heart.jpg",
    precio: 350,
    tags: "Humano",

  },
];

let carrito = [];
let carritoReal = document.getElementById("carrito");


function imprimirStickers(impresiones) {

  let contenedor = document.getElementById("contenedor");


  for (const sticker of impresiones) {
    let card = document.createElement("div");

    card.innerHTML =
      `<div class="containerProduct">
            <div class="content">
              <div id="product" class="card">
                <span class="numberproduct">${sticker.id}</span>
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



