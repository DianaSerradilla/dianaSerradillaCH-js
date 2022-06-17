let stickersIndex = document.getElementsByClassName("stickers-index");


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

imprimirStickersIndex(impresiones);