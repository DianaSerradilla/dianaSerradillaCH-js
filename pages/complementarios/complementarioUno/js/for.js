let botonComienzo = document.querySelector("#comienzoEjercicio");
let num;
botonComienzo.addEventListener("click", ejercicio)
function ejercicio() {

  for (let i = 0; i <= 6; i++) {


    for (let j = 0; j <= 6; j++) {


      for (let k = 0; k <= 6; k++) {
        // document.write(j + "-");

        if (i == 3) {
          i = "E";
          document.write(i + "-");
          i = 3;
        } else {
          document.write(i + "-");

        }
        if (j == 3) {
          j = "E";
          document.write(j + "-");
          j = 3;

        } else {
          document.write(j + "-");

        }

        if (k == 3) {
          k = "E";
          document.write(k);
          k = 3;

        } else {
          document.write(k);

        }

        document.write("<br>")


      }
      document.write("<br>")

    }
    document.write("<br>")

  }



};


;