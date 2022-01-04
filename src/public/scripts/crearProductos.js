window.addEventListener('load',function(){
    let formulario = document.querySelector('form');
    let erroresFront = [];
    formulario.addEventListener('submit',function(e){
        //Validacion de nombre
        let nombre = document.getElementById('name');
        if(nombre.value == ''){
            erroresFront.push('El nombre es Obligatorio')
        }else if(nombre.value.length < 5){
            erroresFront.push('Introduce un nombre valido');
        }
        //validacion de descripcion
        let descripcion = document.getElementById('description');
        if(descripcion.value.length < 20){
            erroresFront.push('La descripcion debe tener por lo menos 20 caracteres');
        }

        //validacion de imagen
             
             var formData = new FormData();
             var file = document.getElementById("image_p").files[0];
             if(file != undefined){
                formData.append("Filedata", file);
                var t = file.type.split('/').pop().toLowerCase();
                if (t != "jpeg" && t != "jpg" && t != "png"  && t != "gif") {
                    alert('Introduce una imagen valida (jpg jpeg png gif)');
                    document.getElementById("image_p").value = '';
                }
             }

        if(erroresFront.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector('div.errorsFront ul')
            for (let i = 0; i < erroresFront.length; i++) {
                ulErrores.innerHTML += '<li>' + erroresFront[i] + '</li>';
            }
        }
        
    })
})