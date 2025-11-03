function validartodo() {
      //validar nombre
      const nombreInput = document.getElementById("nombre");
      const valor = nombreInput.value;

      const msjPrevio = document.getElementById("mensaje_error_nombre")
      if (msjPrevio) msjPrevio.remove();

      const minCaracteres = 4;
      const maxCaracteres = 25;

      const mensaje = document.createElement("p");
      mensaje.id = "mensaje_error_nombre";


      if (valor.trim() === "") {
        mensaje.textContent = "Nombre obligatorio";
        mensaje.style.color = "red"


      } else if (valor.length < minCaracteres) {
        mensaje.textContent = "Nombre muy corto";
        mensaje.style.color = "red"

      } else if (valor.length > maxCaracteres) {
        mensaje.textContent = "Nombre muy largo";
        mensaje.style.color = "red"


      } else {
        mensaje.textContent = "Nombre correcto";
        mensaje.style.color = "green"

      }

      nombreInput.insertAdjacentElement("afterend", mensaje)

      //validar gmail
      const gmailInput = document.getElementById("gmail");
      const valor1 = gmailInput.value;

      const msjPrevio1 = document.getElementById("mensaje_error_gmail")
      if (msjPrevio1) msjPrevio1.remove();

      const mensaje1 = document.createElement("p");
      mensaje1.id = "mensaje_error_gmail";

      let regexp1 = new RegExp("@gmail\\.com(\\.ar)?$")

      if (valor1.trim() === "") {
        mensaje1.textContent = "Gmail obligatorio";
        mensaje1.style.color = "red"


      } else if (regexp1.test(valor1) === false) {
        mensaje1.textContent = "Falta el gmail, o termina mal";
        mensaje1.style.color = "red"

      } else {
        mensaje1.textContent = "Gmail correcto";
        mensaje1.style.color = "green"


      }

      gmailInput.insertAdjacentElement("afterend", mensaje1)

      //validar numero
      const numeroInput = document.getElementById("numero");
      const valor2 = numeroInput.value;

      const msjPrevio2 = document.getElementById("mensaje_error_num")
      if(msjPrevio2) msjPrevio2.remove();

      const mensaje2 = document.createElement("p");
      mensaje2.id = "mensaje_error_num";

      let regexp2 = new RegExp ("^\\+?\\d{7,15}$")

      if(valor2.trim() === ""){
        mensaje2.textContent = "Numero de telefono obligatorio";
        mensaje2.style.color = "red"


      } else if (regexp2.test(valor2) === false){
        mensaje2.textContent = "Falta + o esta mal escrito ";
        mensaje2.style.color = "red"

      } else{
         mensaje2.textContent = "Telefono correcto";
        mensaje2.style.color = "green"

      }

      numeroInput.insertAdjacentElement("afterend", mensaje2)

      return true;

    }

    function mostrardatos(){

        const Validado = validartodo();

        if(!Validado){
            console.log("Formulario no valido")
            return;
        }else{


      const nombreInput = document.getElementById("nombre");
      const valor = nombreInput.value;

      const numeroInput = document.getElementById("numero");
      const valor2 = numeroInput.value;

      const apellidoInput = document.getElementById("apellido")
      const valor3 = apellidoInput.value;

      const gmailInput = document.getElementById("gmail");
      const valor1 = gmailInput.value;

      const generoSelection = document.getElementById("genero")
      const valor5 = generoSelection.value;



      const mensaje1 = document.createElement("p");

      const mensaje2 = document.createElement("p");

      const mensaje3 = document.createElement("p");

      const mensaje4 = document.createElement("p");

      const mensaje5 = document.createElement("p")


      mensaje1.textContent = "Nombre: " + valor;

      mensaje3.textContent = "Apellido: " + valor3;

      mensaje2.textContent = "Numero: " + valor2;

      mensaje4.textContent = "Gmail: " + valor1;

      if(valor5 === "Masculino"){
        mensaje5.textContent = "Genero: Masculino"
      }else if (valor5 === "Femenino"){
        mensaje5.textContent= "Genero: Femenino"
      } else {
        mensaje5.textContent= "No se selecciono ningun genero todavia"

      }

      const contenedor = document.getElementById("resultado");
      contenedor.innerHTML = ""
      contenedor.append(mensaje1,mensaje3,mensaje2,mensaje4,mensaje5)
      }



    }
    

