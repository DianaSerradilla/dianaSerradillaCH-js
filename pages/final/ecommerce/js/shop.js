


class Sticker {
  constructor(sticker) {
    this.id = sticker.id;
    this.nombre = sticker.nombre;
    this.categoria = sticker.categoria;
    this.img = sticker.img;
    this.precio = sticker.precio;
    this.tags = sticker.tags;
    this.stock = sticker.stock;
    this.cantidadTotalC = 1;
    this.precioTotalC = sticker.precio;
  }


  agregarUnidadCarrito(){ 
    this.cantidadTotalC++;
    
  }



   quitarrUnidadCarrito(){ 
    this.cantidadTotalC--;
  }

  actualizarPrecioTotalCarrito(){
    this.precioTotalC = this.precio * this.cantidadTotalC;
  }
}


const categorias = ["Caricaturas", "Música", "Series", "Deporte", "Anime", "Aesthetic", "Animales", "Banderas", "Videojuegos", "Naturaleza", "Politica", "Memes","Comida","Peliculas", ];


const ilustradores = ["Anónimo", "Willian Santiago", "Naranjalidad", "Nur Ventura", "Daniella Martí"];

const impresiones = [
  {
    id: 0,
    nombre: "Tea Rex",
    categoria: categorias[11],
    img: "img/stickers/tearex.jpg",
    precio: 150,
    tags: "meme",
    ilustrador: ilustradores[0],
    stock: 2,

  },
  {
    id: 1,
    nombre: "Harry Style",
    categoria: categorias[1],
    img: "img/stickers/harry.jpg",
    precio: 120,
    tags: "música",
    ilustrador: ilustradores[0],
    stock: 2,
  },
  {
    id: 2,
    nombre: "Dark",
    categoria:  categorias[2],
    img: "img/stickers/dark.jpg",
    precio: 250,
    tags: "Series",
    ilustrador: ilustradores[0],
    stock: 7,
  },
  {
    id: 3,
    nombre: "Mc",
    categoria:  categorias[12],
    img: "img/stickers/mc.jpg",
    precio: 350,
    tags: "Comida",
    ilustrador: ilustradores[0],
    stock: 10,

  },
   {
    id: 4,
    nombre: "Thor and Loki",
    categoria:  categorias[13],
    img: "img/stickers/thorLoki.jpg",
    precio: 250,
    tags: "Serie",
    ilustrador: ilustradores[0],
    stock: 10,

  },
   {
    id: 5,
    nombre: "Creación de Adan",
    categoria:  categorias[5],
    img: "img/stickers/adanObra.jpg",
    precio: 271,
    tags: "Obra",
    ilustrador: ilustradores[0],
    stock: 12,

  },

   {
    id: 6,
    nombre: "Bellota dormida",
    categoria:  categorias[0],
    img: "img/stickers/bellotaDormida.jpg",
    precio: 233,
    tags: "Caricatura",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 7,
    nombre: "Billie Elish Illustracion",
    categoria:  categorias[1],
    img: "img/stickers/billieE.jpg",
    precio: 112,
    tags: "Música",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 8,
    nombre: "Billie Elish",
    categoria:  categorias[1],
    img: "img/stickers/billieE-uno.jpg",
    precio: 100,
    tags: "Música",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 9,
    nombre: "Leonardo Di Caprio meme",
    categoria:  categorias[11],
    img: "img/stickers/diCaprioMeme.jpg",
    precio: 50,
    tags: "Meme",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 10,
    nombre: "Estatua Meme",
    categoria:  categorias[11],
    img: "img/stickers/estatua.jpg",
    precio: 250,
    tags: "Obra",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 11,
    nombre: "Harry Potter Ilustracion",
    categoria:  categorias[13],
    img: "img/stickers/harryPotter.jpg",
    precio: 250,
    tags: "Fantasia",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 12,
    nombre: "Maradonna Ilustracion",
    categoria:  categorias[3],
    img: "img/stickers/maradona.jpg",
    precio: 25,
    tags: "Futbol",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 13,
    nombre: "Messi Ilustracion",
    categoria:  categorias[3],
    img: "img/stickers/messiCopa.jpg",
    precio: 450,
    tags: "Futbol",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 14,
    nombre: "Niño Meme",
    categoria:  categorias[11],
    img: "img/stickers/neneMeme.jpg",
    precio: 250,
    tags: "Obra",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 15,
    nombre: "Perrito TDFW",
    categoria:  categorias[11],
    img: "img/stickers/perritoTFW.jpg",
    precio: 250,
    tags: "Meme",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 16,
    nombre: "Stich lentes",
    categoria:  categorias[0],
    img: "img/stickers/stichLentes.jpg",
    precio: 250,
    tags: "Obra",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 17,
    nombre: "El Viaje de Chihiro",
    categoria:  categorias[4],
    img: "img/stickers/viajeChihiro.jpg",
    precio: 310,
    tags: "Anime",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 18,
    nombre: "Arctic Monkets",
    categoria:  categorias[1],
    img: "img/stickers/arctic.jpg",
    precio: 225,
    tags: "Musica",
    ilustrador: ilustradores[0],
    stock: 12,

  }, {
    id: 19,
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
let totalStickers = document.getElementById("total-stickers");
let totalStickersS = document.getElementById("total-stickersS");
let mostrarTodos = document.getElementsByClassName("mostrar-todos");
// let cantidadContador=0;
let cantidadContador= JSON.parse(sessionStorage.getItem("cantidadTotal")) || 0;
// let precioTotal = 0;
let precioTotal = JSON.parse(sessionStorage.getItem("precioTotal")) || 0;

sessionStorage.setItem("cantidadTotal", cantidadContador);
sessionStorage.setItem("precioTotal", precioTotal);
precioTCarrito.innerHTML = precioTotal;
cantidadTCarrito.innerHTML= cantidadContador;



function comprar(stickerID){  




  cantidadContador++;
 
  impresiones.forEach(sticker => {
    if(sticker.id == stickerID){ 
      console.log(sticker.stock)
      if(sticker.precio < 0){
        alert("No hay mas stock")
        
      }else{
        precioTotal+= sticker.precio;
          let stickerEnCarrito = carrito.find((elemento) => elemento.id = stickerID);
          if(stickerEnCarrito){
          let index = carrito.findIndex((elemento) => elemento.id === stickerEnCarrito.id)
          carrito[index].agregarUnidadCarrito();
          carrito[index].actualizarPrecioTotalCarrito();
          Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Has añadido otro elemento al carrito',
          showConfirmButton: false,
          timer: 1500
        })

          console.table(carrito);
        }else { 
          carrito.push(new Sticker(impresiones[stickerID]));       
     
         
          Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Has añadido un elemento al carrito',
          showConfirmButton: false,
          timer: 1500
            })

          console.table(carrito);
        }
      }
    }    
  });

 



 

  sessionStorage.setItem("cantidadTotal", cantidadContador);
  sessionStorage.setItem("precioTotal", precioTotal);  
  precioTotal = JSON.parse(sessionStorage.getItem("precioTotal")) ;
  cantidadContador= JSON.parse(sessionStorage.getItem("cantidadTotal"));  
  precioTCarrito.innerHTML = precioTotal;
  cantidadTCarrito.innerHTML= cantidadContador;
};



function imprimirStickers(impresiones) {
  
  let contenedor = document.getElementById("contenedor");
  totalStickers.innerHTML = impresiones.length;
  contenedor.innerHTML = "";
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
    `<a href="#" id="ilustrador${ilustradores[i]}"> ${ilustradores[i]} (${contadorCantidad})</a>`
    contenedorIlustradores.appendChild(ilustrador)
    contadorCantidad=0;
    let buttonIlustrador = document.getElementById(`ilustrador${ilustradores[i]}`);
    buttonIlustrador.addEventListener("click", () => filtrarIlustrador(ilustradores[i], impresiones));
  }


};

function imprimirPrecios(){
  let contenedorPrecios = document.getElementById("contenedor-precios");
  let contador=0;
  let contadorUno= 50;
  for (let i = 0; i <= 4; i++) {
    let precio = document.createElement("li");     
        // if(i!=4){
        //   precio.innerHTML =
        // `<li><a href="#" id="${i}" >$${contador}.00 - $${contadorUno}.00</a></li>`
        // }else{
        //     precio.innerHTML =
        //   `<a href="#" id="4">$250.00+</a>`      
        // }
        //Operadores avanzados
        i!=4 ?   precio.innerHTML =
        `<li><a href="#" id="${i}" >$${contador}.00 - $${contadorUno}.00</a></li>` :  precio.innerHTML =
          `<a href="#" id="4">$250.00+</a>`   
    contador+=50;
    contadorUno+=50;
    contenedorPrecios.appendChild(precio);
    let buttonPrecio = document.getElementById(`${i}`);
    buttonPrecio.addEventListener("click", () => filtrarPrecio(i,impresiones));
  
  }

}






function filtrarCategoria(categoria,impresiones){
  const impresionesXCategoria = impresiones.filter(sticker => sticker.categoria == categoria);
  contenedor.innerHTML = "";
  totalStickers.innerHTML = impresionesXCategoria.length;
  imprimirStickers(impresionesXCategoria)
  impresionesXCategoria.length = 0;
}

function filtrarIlustrador(ilustrador,impresiones){
  const impresionesXIlustrador = impresiones.filter(sticker => sticker.ilustrador == ilustrador);
  contenedor.innerHTML = "";
  totalStickers.innerHTML = impresionesXIlustrador.length;
  imprimirStickers(impresionesXIlustrador)
  impresionesXIlustrador.length = 0;
}



function filtrarPrecio(i, impresiones){
  let impresionesXPrecio= [];
  // console.log(i);
  switch (i) {
    case 0:
      impresionesXPrecio = impresiones.filter(sticker => sticker.precio>0 && sticker.precio<=50);      
      break;
    case 1:
      impresionesXPrecio = impresiones.filter(sticker => sticker.precio>50 && sticker.precio<=100);      
      break;
    case 2:
      impresionesXPrecio = impresiones.filter(sticker => sticker.precio>100 && sticker.precio<=150);      
     break;
    case 3:
      impresionesXPrecio = impresiones.filter(sticker => sticker.precio>150 && sticker.precio<=250);  
     break;
     case 4:
      impresionesXPrecio = impresiones.filter(sticker => sticker.precio>250);      
     break;
    default:
      break;
  }
  contenedor.innerHTML = "";
  totalStickers.innerHTML = impresionesXPrecio.length;
  imprimirStickers(impresionesXPrecio);

 
}





for (let i = 0; i < mostrarTodos.length; i++) {  
  mostrarTodos[i].addEventListener("click", () => imprimirStickers(impresiones));
}


imprimirStickers(impresiones);
imprimirCategorias(categorias,impresiones);
imprimirIlustrador(ilustradores,impresiones);
imprimirPrecios();

totalStickersS.innerHTML = impresiones.length;

