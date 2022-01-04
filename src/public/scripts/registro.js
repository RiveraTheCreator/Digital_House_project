window.addEventListener('load',function(){
    let formulario = document.querySelector('form');
    let erroresFront = [];
    formulario.addEventListener('submit',function(e){

        //Validacion nombre y apellido
        let nombre = document.querySelector('input.firstName');
        if(nombre.value.trim() == ''){
            erroresFront.push('Introduce el nombre');
        }else
        if(nombre.value.length < 2){
            erroresFront.push('Introduce un nombre valido');
        }

        let apellido = document.querySelector('input.lastName');
        if(apellido.value.trim() == ''){
            erroresFront.push('Introduce el apellido');
        } else
        if(nombre.value.length < 2){
            erroresFront.push('Introduce un apellido valido');
        }

        //Validacion email
        let email = document.querySelector('input.email');
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.value.trim() == ''){
            erroresFront.push('Introduce un email');
        }else
        if(inputText.value.match(mailformat)){
            erroresFront.push('Email con el formato incorrecto');
        }

         //validacion imagenes        
         var formData = new FormData();
         var file = document.getElementById("picture").files[0];
         console.log(file);
         formData.append("Filedata", file);
         var t = file.type.split('/').pop().toLowerCase();
         if (t != "jpeg" && t != "jpg" && t != "png"  && t != "gif") {
             alert('Introduce una imagen valida (jpg jpeg png gif)');
             document.getElementById("picture").value = '';
         }
 

        //Validacion password
        let password = document.querySelector('input.password');
        if(password.value == ''){
            erroresFront.push('Introduce una contraseña');
        } else
        if(password.value.length < 8){
            erroresFront.push('Introduce al menos 8 caracteres en la contraseña')
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

    //Validacion picture en
    // function validateImage() {
    //     console.log('*****************************************')
    //     var formData = new FormData();
    //     var file = document.getElementById("picture").files[0];
    //     formData.append("Filedata", file);
    //     var t = file.type.split('/').pop().toLowerCase();
    //     if (t != "jpeg" && t != "jpg" && t != "png"  && t != "gif") {
    //         //erroresFront.push('Introduce una imagen valida (jpg jpeg png gif)');
    //         alert('Please select a valid image file');
    //         document.getElementById("picture").value = '';
    //         return false;
    //     }
    //     return true;
    // }



