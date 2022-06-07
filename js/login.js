const buttonLogin = document.getElementById("login-button");
const usuario = "DIANATUTORA";
const contrasena = "123456";



function ingresarLogin(usuario, contrasena){

  

  let user = document.getElementById("login-user").value.toUpperCase();

  let password = document.getElementById("login-password").value;
  

        if(user === usuario && password === contrasena){
          // alert("correcto")
            Toastify({
              text: "Usuario correcto.",
              duration: 3000,
              close: false,
              gravity: "top", // `top` or `bottom`
              position: "left", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #007566, #589A8D)",
              },
              onClick: function(){} // Callback after click
            }).showToast();
            window.location= 'indexOne.html';
        }else{
          // alert("incorrecto")
         Toastify({
              text: "Usuario incorrecto, reintente.",
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

            // location.reload();
            setTimeout('location.reload()',2000)
        }
  console.log(user);

  console.log(usuario);
  console.log(password)

  console.log(contrasena)
}

buttonLogin.addEventListener("click", ()=> ingresarLogin(usuario,contrasena))