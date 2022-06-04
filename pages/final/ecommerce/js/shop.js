


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




let carrito = [];
let cantidadTCarrito = document.getElementById("carrito-totalCantidad");
let cantidadTCarritoMobile = document.getElementById("carrito-totalCantidad-mobile");
let precioTCarrito = document.getElementById("carrito-totalPrecio");
let precioTCarritoMobile = document.getElementById("carrito-totalPrecio-mobile");
let totalStickers = document.getElementById("total-stickers");
let totalStickersS = document.getElementById("total-stickersS");
let mostrarTodos = document.getElementsByClassName("mostrar-todos");
// let cantidadContador=0;
let cantidadContador= JSON.parse(sessionStorage.getItem("cantidadTotal")) || 0;
// let precioTotal = 0;
let precioTotal = JSON.parse(sessionStorage.getItem("precioTotal")) || 0;
let stickersIndex = document.getElementsByClassName("stickers-index");


function pruebaF() { 
  alert("El id de este boton es" + stickersIndex[i].id);
}

for (let i = 0; i < stickersIndex.length; i++) {
stickersIndex[i].addEventListener("click", () => pruebaF()
);

  
}




sessionStorage.setItem("cantidadTotal", cantidadContador);
sessionStorage.setItem("precioTotal", precioTotal);
precioTCarrito.innerHTML = precioTotal;
precioTCarritoMobile.innerHTML = precioTotal;
cantidadTCarrito.innerHTML= cantidadContador;
cantidadTCarritoMobile.innerHTML= cantidadContador;



function comprar(stickerID){  




  
  impresiones.forEach(sticker => {
    if(sticker.id == stickerID){ 
      
      if(sticker.stock>0){
        cantidadContador++;
      precioTotal+= sticker.precio;
      sticker.stock--;
      console.table(sticker)
          // Swal.fire({
          // position: 'center',
          // icon: 'success',
          // title: 'Has añadido un elemento al carrito',
          // showConfirmButton: false,
          // timer: 1500
          //   })




          Toastify({
              text: "Has añadido un elemento al carrito",
              duration: 3000,
              close: false,
              gravity: "top", // `top` or `bottom`
              position: "left", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #007566, #8FC1B5)",
              },
              onClick: function(){} // Callback after click
            }).showToast();
        }else{
          Toastify({
              text: "No hay mas stock de este producto",
              duration: 3000,
              close: false,
              gravity: "top", // `top` or `bottom`
              position: "left", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #e53637, #EC7F7F)",
              },
              onClick: function(){} // Callback after click
            }).showToast();
        }  
    }  


  });





 

  sessionStorage.setItem("cantidadTotal", cantidadContador);
  sessionStorage.setItem("precioTotal", precioTotal);  
  precioTotal = JSON.parse(sessionStorage.getItem("precioTotal")) ;
  cantidadContador= JSON.parse(sessionStorage.getItem("cantidadTotal"));  
  precioTCarrito.innerHTML = precioTotal;
  precioTCarritoMobile.innerHTML = precioTotal;
  cantidadTCarrito.innerHTML= cantidadContador;
  cantidadTCarritoMobile.innerHTML= cantidadContador;
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

function imprimirStickersIndex(impresiones){ 

  let contenedorIndex = document.getElementById("contenedorIndex");
  contenedorIndex.innerHTML = "";
  let contador=0;
  
    for (const sticker of impresiones) {
      contador++;
      if(contador<9){
        let cardIndex = document.createElement("div");
          switch (sticker.atributo) {
            case "nuevo":
              // console.log("0")
              cardIndex.className+= 'col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals';
              break;
            case "oferta":
              cardIndex.className+= 'col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales';
              // console.log("1")

              break;
            case "popular": 
              cardIndex.className+= 'col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix ';
              // console.log("2")

            break;
            default:
              break;
          }
        cardIndex.setAttribute('id', 'sticker');
          cardIndex.innerHTML= `
        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="">
                                <img src="${sticker.img}" alt="${sticker.nombre}">
                                <ul class="product__hover">
                                    <li><a href="#"><img src="img/icon/heart.png" alt=""></a></li>

                                    <li><a href="#"><img src="img/icon/search.png" alt=""></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6>${sticker.nombre}</h6>
                                <a href="#" class="add-cart" id="agregar${sticker.id}">+ Add To Cart</a>

                                <h5>$ ${sticker.precio}</h5>
                               
                            </div>
          </div>
        `;
        
    contenedorIndex.appendChild(cardIndex);
    let buttonAdd = document.getElementById(`agregar${sticker.id}`)
    buttonAdd.addEventListener("click", () => comprar(sticker.id));
      }else{ 
        break;
      }
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


imprimirStickersIndex(impresiones);
// imprimirStickers(impresiones);
imprimirCategorias(categorias,impresiones);
imprimirIlustrador(ilustradores,impresiones);
imprimirPrecios();
totalStickersS.innerHTML = impresiones.length;

