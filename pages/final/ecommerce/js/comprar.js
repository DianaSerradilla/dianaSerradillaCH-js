

//--------------------------Declaraciones inicio
class Sticker {
  constructor(sticker) {
    this.id = sticker.id;
    this.nombre = sticker.nombre;
    this.categoria = sticker.categoria;
    this.img = sticker.img;
    this.precio = sticker.precio;
    this.tags = sticker.tags;
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
let cantidadStickers= JSON.parse(sessionStorage.getItem("cantidadTotal")) || 0;
let precioTotal = JSON.parse(sessionStorage.getItem("precioTotal")) || null;





function comprar(stickerID){  
  
  impresiones.forEach(sticker => {
    if(sticker.id == stickerID){       
      
      let stickerEnCarrito = carrito.find((elemento) => elemento.id == stickerID);
    
      if(stickerEnCarrito){
          let index = carrito.findIndex((elemento) => elemento.id === stickerEnCarrito.id);

          carrito[index].agregarUnidadCarrito();
          carrito[index].actualizarPrecioTotalCarrito();
           Toastify({
                        text: `Has añadido nuevamente ${impresiones[stickerID].nombre} al carrito`,
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
         
        } else{
      
        carrito.push(new Sticker(impresiones[stickerID]));

        
          Toastify({
                        text: `Has añadido ${impresiones[stickerID].nombre} al carrito`,
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

            }
          
          
    };  


  });



  // console.table(carrito);
  obtenerPrecioyCantidadTotal() 

};



function obtenerPrecioyCantidadTotal(){

 carritoJSON = JSON.stringify(carrito);
 sessionStorage.setItem("carrito", carritoJSON)
 const carroJSON = JSON.parse(carritoJSON)

 console.table(carroJSON);
  for(const sticker of carroJSON){   
    precioTotal+= sticker.precioTotalC;
     
    cantidadStickers+= sticker.cantidadTotalC;
  }

  console.log(precioTotal);
  console.log(cantidadStickers);
  sessionStorage.setItem("cantidadTotal", cantidadStickers);
  sessionStorage.setItem("precioTotal", precioTotal); 


  precioTCarrito.innerHTML = precioTotal;
  precioTCarritoMobile.innerHTML = precioTotal;
  cantidadTCarrito.innerHTML= cantidadStickers;
  cantidadTCarritoMobile.innerHTML= cantidadStickers;

  
}




precioTCarrito.innerHTML = precioTotal;
precioTCarritoMobile.innerHTML = precioTotal;
cantidadTCarrito.innerHTML= cantidadStickers;
cantidadTCarritoMobile.innerHTML= cantidadStickers;

