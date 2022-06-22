//-------------Declaraciones inicio
let subtotalButton = document.getElementById("subtotal-checkout");
let cantidadButton = document.getElementById("cantidad-checkout");
let contenedorBoton = document.getElementById("contenedor-limpiarCarrito");
let carroJSON = JSON.parse(sessionStorage.getItem("carrito")) || [];
let buttonLimpiarCarrito = document.getElementById("limpiar-carrito");
let buttonPagar = document.getElementById("pagar-carrito");
const inputCupon = document.getElementById("input-cupon");
let buttonCupon = document.getElementById("aplicar-cupon");
let precioTotal = sessionStorage.getItem("precioTotal");

//-------------Declaraciones fin

//-------------Desarrollo de funciones inicio

//---------Función imprimir carrito
//-------- En base al carrito guardado en storage, lo imprimo en el dom. En caso de que el carrito esté vacio mostrará un mensaje para que el usuario entienda que está ocurriendo.
function imprimirCarrito(carroJSON) {
  let contenedorCarrito = document.getElementById("contenedor-carrito");
  contenedorCarrito.innerHTML = "";

  if (carroJSON.length === 0) {
    let card = document.createElement("tr");
    card.innerHTML = `
     <tr>
  <td class="product__cart__item">No hay productos cargados</td>
</tr>`;
    contenedorCarrito.appendChild(card);
  } else {
    for (const producto of carroJSON) {
      let card = document.createElement("tr");
      card.innerHTML = `
    
                                    <td class="product__cart__item">
                                        <div class="product__cart__item__pic">
                                            <img src="${producto.img}" alt="">
                                        </div>
                                      
                                    </td>
                                    <td class="quantity__item">
                                        <div class="quantity">
                                            <div class="pro-qty-2">
                                            <span class="fa fa-angle-left dec qtybtn" id="less${producto.id}"></span>
                                            <input type="text" value="${producto.cantidadTotalC}">
                                            <span class="fa fa-angle-right inc qtybtn" id="more${producto.id}"></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="cart__price">$ ${producto.precioTotalC}</td>
                                    <td class="cart__close"><i class="fa fa-close"></i></td>
    `;

      contenedorCarrito.appendChild(card);
      let buttonLess = document.getElementById(`less${producto.id}`);
      let buttonMore = document.getElementById(`more${producto.id}`);
      buttonLess.addEventListener("click", () => quitar(producto.id));
    }
  }
}

function quitar(productoID) {
  for (const producto of carroJSON) {
    if (producto.id == productoID) {
      producto.cantidadTotalC--;
    }
  }
}

// function actualizarItems(carroJSON) {
//   obtenerPrecioyCantidadTotal(carroJSON);
// }

//------------Función limpiar carrito
//--------- Esta función permite que al momento de hacer click sobre limpiar carrito se borre todo del storage como también del DOM y el botón quede con estilos deshabilitados.
function limpiarCarrito() {
  //---------Remuevo del storage
  sessionStorage.removeItem("carrito");
  sessionStorage.removeItem("cantidadTotal");
  sessionStorage.removeItem("precioTotal");
  carroJSON = [];
  //---------Remuevo del DOM
  cantidadButton.innerHTML = 0;
  subtotalButton.innerHTML = 0;
  precioTCarrito.innerHTML = 0;
  precioTCarritoMobile.innerHTML = 0;
  cantidadTCarrito.innerHTML = 0;
  cantidadTCarritoMobile.innerHTML = 0;
  //---------Cambio estilos al boton
  contenedorBoton.className = "continue__btn update__btnDisabled";
  buttonPagar.className = "primary-btnDisabled"
  buttonCupon.className = "button-disabled";
  //---------Vuelvo a imprimir el carrito
  imprimirCarrito(carroJSON);
}


function aplicarDescuento(cupones, valorInput, precioTotal) {
  const disponibilidadCupon = cupones.indexOf(valorInput.toUpperCase())
  if (disponibilidadCupon != -1) {
    let descuento;
    let nuevoValor;
    console.log(precioTotal)
    switch (disponibilidadCupon) {
      case 0:
      case 1:
        descuento = 0.1;
        nuevoValor = precioTotal * descuento;
        sessionStorage.setItem("precioTotal", nuevoValor);

        break;
      case 2:
      case 3:
        descuento = 0.2;
        break;
      case 4:
        descuento = 0.5;
        break;
      default:
        break;

    }
  } else {
    Toastify({
      text: `El cupón no es válido.`,
      duration: 3000,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #BF0426,#8C031C)"
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }

}


function imprimirCheckout() {

}
function pagar() {
  Swal.fire({
    title: '¿Tienes algún cupón?',
    showDenyButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Vuelve atrás,colócalo y tendrás un descuento', '',)
    } else if (result.isDenied) {
      Swal.fire('Recibimos tu pago, nos pondremos en contacto contigo', '', 'success')
      limpiarCarrito();
    }
  })
}

function avisoCarritoVacio() {
  Toastify({
    text: `El carrito está vacío`,
    duration: 3000,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #BF0426,#8C031C)"
    },
    onClick: function () { } // Callback after click
  }).showToast();
}

//-------------Desarrollo de funciones fin

cantidadButton.innerHTML = JSON.parse(sessionStorage.getItem("cantidadTotal"));
subtotalButton.innerHTML = JSON.parse(sessionStorage.getItem("precioTotal"));

//-------------Invocación de funciones inicio

imprimirCarrito(carroJSON);
//Esto primero verifica en que condición se encuentra el carrito para, que en caso que esté vació no realizar nada y solamente dar un aviso. En caso de que el carrito tenga elemento, si invoca a la función.
buttonLimpiarCarrito.addEventListener("click", () => {
  if (carroJSON.length === 0) {

    avisoCarritoVacio();

  } else {
    limpiarCarrito();
  }
});


buttonPagar.addEventListener("click", () => {
  if (carroJSON.length === 0) {

    avisoCarritoVacio();
  } else {
    pagar();
  }
});


buttonCupon.addEventListener("click", () => {
  if (carroJSON.length === 0) {
    avisoCarritoVacio();
  } else {
    if (inputCupon.value == "") {
      Toastify({
        text: `El cupón está vacío, ingrese uno válido`,
        duration: 3000,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #BF0426,#8C031C)"
        },
        onClick: function () { } // Callback after click
      }).showToast();
    } else {

      aplicarDescuento(cupones, inputCupon.value, precioTotal);
    }
  }
})


if (carroJSON.length === 0) {
  contenedorBoton.className = "continue__btn update__btnDisabled";
  buttonPagar.className = "primary-btnDisabled"
  buttonCupon.className = "button-disabled";
  cantidadButton.innerHTML = 0;
  subtotalButton.innerHTML = 0;
}
//-------------Invocación de funciones fin
