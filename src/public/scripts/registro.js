window.addEventListener('load',function(){
    let formulario = document.querySelector('form');
    let erroresFront = [];
    let charCount = 0;
    formulario.addEventListener('submit',function(e){
        //e.preventDefault();
        //Validacion nombre y apellido
        let nombre = document.querySelector('input.firstName');
        if(nombre.value == '' ){
            erroresFront.push('Introduce el nombre');
            
        }else  if(nombre.value.length < 2){
            erroresFront.push('Introduce un nombre valido');
        }else{erroresFront=[]}

        let apellido = document.querySelector('input.lastName');
        if(apellido.value.trim() == ''){
            erroresFront.push('Introduce el apellido');
        } else if(nombre.value.length < 2){
            erroresFront.push('Introduce un apellido valido');
        }else{erroresFront=[]}

        //Validacion email
        // let email = document.querySelector('input.email');
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // if(email.value.trim() == ''){
        //     erroresFront.push('Introduce un email');
        // }else
        // if(email.value.match(mailformat)){
        //     erroresFront.push('Email con el formato incorrecto');
        // }else{erroresFront=[]}

         //validacion imagenes
         var formData = new FormData();
         var file = document.getElementById("picture").files[0];
         if(file != undefined){
            formData.append("Filedata", file);
            var t = file.type.split('/').pop().toLowerCase();
            if (t != "jpeg" && t != "jpg" && t != "png"  && t != "gif") {
                alert('Introduce una imagen valida (jpg jpeg png gif)');
                document.getElementById("picture").value = '';
            }
         }

        //Validacion password
        let password = document.querySelector('input.password');
        if(password.value == '' && password.value.length == 0){
            erroresFront.push('Introduce una contraseña');
        } else
        if(password.value.length < 8){
            erroresFront.push('Introduce al menos 8 caracteres en la contraseña');
        }else{erroresFront=[]}

       
        if(erroresFront.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector('div.errorsFront ul')
            for (let i = 0; i < erroresFront.length; i++) {
                ulErrores.innerHTML += '<li>' + erroresFront[i] + '</li>';
            }
        }

    })

})



