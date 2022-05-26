


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


const categorias = ["Caricaturas", "Música", "Series", "Deporte", "Anime", "Aesthetic", "Animales", "Banderas", "Videojuegos", "Naturaleza", "Politica", "Memes","Comida","Peliculas", ];


const ilustradores = ["Anónimo", "Willian Santiago", "Naranjalidad", "Nur Ventura", "Daniella Martí"];

const impresiones = [
  {
    id: 01,
    nombre: "Tea Rex",
    categoria: categorias[11],
    img: "img/stickers/tearex.jpg",
    precio: 150,
    tags: "meme",
    ilustrador: ilustradores[0],
    stock: 2,
  },
  {
    id: 02,
    nombre: "Harry Style",
    categoria: categorias[1],
    img: "img/stickers/harry.jpg",
    precio: 120,
    tags: "música",
    ilustrador: ilustradores[0],
    stock: 3,
  },
  {
    id: 03,
    nombre: "Dark",
    categoria:  categorias[2],
    img: "img/stickers/dark.jpg",
    precio: 250,
    tags: "Series",
    ilustrador: ilustradores[0],
    stock: 7,
  },
  {
    id: 04,
    nombre: "Mc",
    categoria:  categorias[12],
    img: "img/stickers/mc.jpg",
    precio: 350,
    tags: "Comida",
    ilustrador: ilustradores[0],
    stock: 10,

  },
   {
    id: 05,
    nombre: "Thor and Loki",
    categoria:  categorias[13],
    img: "img/stickers/thorLoki.jpg",
    precio: 250,
    tags: "Serie",
    ilustrador: ilustradores[0],
    stock: 10,

  },
   {
    id: 06,
    nombre: "Creación de Adan",
    categoria:  categorias[5],
    img: "img/stickers/adanObra.jpg",
    precio: 271,
    tags: "Obra",
    ilustrador: ilustradores[0],
    stock: 12,

  },

   {
    id: 07,
    nombre: "Bellota dormida",
    categoria:  categorias[0],
    img: "img/stickers/bellotaDormida.jpg",
    precio: 233,
    tags: "Caricatura",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 08,
    nombre: "Billie Elish Illustracion",
    categoria:  categorias[1],
    img: "img/stickers/billieE.jpg",
    precio: 112,
    tags: "Música",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 09,
    nombre: "Billie Elish",
    categoria:  categorias[1],
    img: "img/stickers/billieE-uno.jpg",
    precio: 100,
    tags: "Música",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 10,
    nombre: "Leonardo Di Caprio meme",
    categoria:  categorias[11],
    img: "img/stickers/diCaprioMeme.jpg",
    precio: 50,
    tags: "Meme",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 11,
    nombre: "Estatua Meme",
    categoria:  categorias[11],
    img: "img/stickers/estatua.jpg",
    precio: 250,
    tags: "Obra",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 12,
    nombre: "Harry Potter Ilustracion",
    categoria:  categorias[13],
    img: "img/stickers/harryPotter.jpg",
    precio: 250,
    tags: "Fantasia",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 13,
    nombre: "Maradonna Ilustracion",
    categoria:  categorias[3],
    img: "img/stickers/maradona.jpg",
    precio: 25,
    tags: "Futbol",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 14,
    nombre: "Messi Ilustracion",
    categoria:  categorias[3],
    img: "img/stickers/messiCopa.jpg",
    precio: 450,
    tags: "Futbol",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 15,
    nombre: "Niño Meme",
    categoria:  categorias[11],
    img: "img/stickers/neneMeme.jpg",
    precio: 250,
    tags: "Obra",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 16,
    nombre: "Perrito TDFW",
    categoria:  categorias[11],
    img: "img/stickers/perritoTFW.jpg",
    precio: 250,
    tags: "Meme",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 17,
    nombre: "Stich lentes",
    categoria:  categorias[0],
    img: "img/stickers/stichLentes.jpg",
    precio: 250,
    tags: "Obra",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 18,
    nombre: "El Viaje de Chihiro",
    categoria:  categorias[4],
    img: "img/stickers/viajeChihiro.jpg",
    precio: 310,
    tags: "Anime",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 19,
    nombre: "Arctic Monkets",
    categoria:  categorias[1],
    img: "img/stickers/arctic.jpg",
    precio: 225,
    tags: "Musica",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 20,
    nombre: "Converse",
    categoria:  categorias[5],
    img: "img/stickers/converse.jpg",
    precio: 415,
    tags: "Moda",
    ilustrador: ilustradores[0],
    stock: 12,

  },

];

let carrito = [];
let cantidadTCarrito = document.getElementById("carrito-totalCantidad");
let precioTCarrito = document.getElementById("carrito-totalPrecio");
let cantidadContador=0;
let precioTotal=0;
let totalStickers = document.getElementById("total-stickers");
let totalStickersS = document.getElementById("total-stickersS");
const impresionesXCategoria = [];


totalStickers.innerHTML = impresiones.length;
totalStickersS.innerHTML = impresiones.length;


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
    card.className+='col-lg-4 col-md-6 col-sm-6',
    card.setAttribute('id', 'sticker');
    card.innerHTML =
      `
                        
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="${sticker.img}">
                                 
                                   <img src="${sticker.img}" alt=${sticker.nombre}">
                                </div>
                                <div class="product__item__text">
                                    <h6>${sticker.nombre}</h6>
                                    <a href="#" class="add-cart" id="agregar${sticker.id}">+ Add To Cart</a>
                                   
                                    <h5>$ ${sticker.precio}</h5>
                                    
                                </div>
                            </div>
                     
                            
                        `;

    contenedor.appendChild(card);
    let buttonAdd = document.getElementById(`agregar${sticker.id}`)
    buttonAdd.addEventListener("click", () => comprar(sticker.id));
  }


}


function imprimirCategorias(categorias,impresiones){

  let contenedorCategorias = document.getElementById("contenedor-categorias");

  for (const i in categorias) {
    let categoria = document.createElement("li");
    let contadorCantidad=0;
    

    
    for (const sticker of impresiones) {
      if(categorias[i] == sticker.categoria){
        contadorCantidad++;
      }

      
    }

    categoria.innerHTML = 
    `<a href="#" id="categoria${categorias[i]}"> ${categorias[i]} (${contadorCantidad})</a>`

    contenedorCategorias.appendChild(categoria)
    contadorCantidad=0; 
    let buttonCategoria = document.getElementById(`categoria${categorias[i]}`);
    buttonCategoria.addEventListener("click",  () =>filtrarCategoria(categorias[i],impresiones));
    
  }

};


function imprimirIlustrador(ilustradores,impresiones){

  let contenedorIlustradores = document.getElementById("contenedor-ilustradores");

  for (const i in ilustradores) {
    let ilustrador = document.createElement("li");
    let contadorCantidad=0;
    

    
    for (const sticker of impresiones) {
      if(ilustradores[i] == sticker.ilustrador){
        contadorCantidad++;
      }
    }

    ilustrador.innerHTML = 
    `<a href="#" id="${ilustradores[i]}"> ${ilustradores[i]} (${contadorCantidad})</a>`

    contenedorIlustradores.appendChild(ilustrador)
    contadorCantidad=0;
  }

};



function filtrarCategoria(categoria,impresiones){
  


  //FILTER
  for (const sticker of impresiones) {
    if(categoria == sticker.categoria){
        impresionesXCategoria.push(sticker);
       
    }
  }

  // console.table(impresionesXCategoria);
  

  //CONTENEDOR.INNERHTML = "";
  for (let i = 0; i < impresiones.length; i++) {
    let contenedorStickers = document.getElementById("contenedor");
  let sticker = document.getElementById("sticker");
    contenedorStickers.removeChild(sticker);
  }

  imprimirStickers(impresionesXCategoria)
}


imprimirStickers(impresiones);
imprimirCategorias(categorias,impresiones);
imprimirIlustrador(ilustradores,impresiones);




// for (const index in impresiones) {
//   buttonAdd[index].addEventListener("click", comprar);
// }


