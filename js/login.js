const buttonLogin = document.querySelector(".login-button");
const usuario = "DIANATUTORA";
const contrasena = "123456"
buttonLogin.addEventListener("click", ()=>{
  let user = document.querySelector(".login-user").value;
  let password = document.querySelector(".login-password").value;
  if(user.toUpperCase()==usuario && password == contrasena){
   
    window.location = "/indexOne.html";
  alert("correcto");
    // Swal.fire({
    //   position: 'center',
    //   icon: 'success',
    //   title: 'Has añadido un elemento al carrito',
    //   showConfirmButton: false,
    //   timer: 2500
    // }
    // );

  
  }else{
    alert("Error, recargue y reingrese nuevamente los datos.")
  }
})