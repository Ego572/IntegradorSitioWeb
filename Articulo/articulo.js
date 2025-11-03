
         const imagenes = [

           '1.png','2.png','3.png','4.png','5.png','6.png','7.jpg','8.png', 

         ]
        let indexImagen = 0;
        function mifuncion1(){
                 indexImagen++;

                 if (indexImagen >= imagenes.length){
                indexImagen = 0
            }

            let imagenCarrusel = document.getElementById('imagenCarrusel');
            imagenCarrusel.src = 'Carrousel/'+ imagenes[indexImagen];
            imagenCarrusel.width = 900;
            imagenCarrusel.height = 800;
        }

        function mifuncion2(){
            indexImagen--;

            if (indexImagen < 0){
                indexImagen = imagenes.length - 1;
            }
             let imagenCarrusel = document.getElementById('imagenCarrusel');
            imagenCarrusel.src = 'Carrousel/'+ imagenes[indexImagen];
            imagenCarrusel.width = 900;
            imagenCarrusel.height = 800;

        }