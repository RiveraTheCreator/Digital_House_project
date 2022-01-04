window.addEventListener('load',function(){
    let formulario = document.querySelector('form');
    let erroresFront = [];
    let charCount = 0;
    formulario.addEventListener('submit',function(e){

        //Validacion email
        let email = document.querySelector('input.email');
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.value.trim() == ''){
            erroresFront.push('Introduce un email');
        }else
        if(inputText.value.match(mailformat)){
            erroresFront.push('Email con el formato incorrecto');
        }else{erroresFront=[]}

        //Validacion password
        let password = document.querySelector('input.password');
        if(password.value === ''){
            erroresFront.push('Introduce una contraseña');
        }else{erroresFront=[]}

        if(erroresFront.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector('div.errorsFront ul')
            for (let i = 0; i < erroresFront.length ; i++) {
                if(charCount > 55 ){
                    console.log('Borrando del DOM');
                    let itemDelete = document.querySelectorAll('li.err');
                    itemDelete.parentNode.removeChild(itemDelete);
                    charCount = 0;
                }
                ulErrores.innerHTML += '<li class="err">' + erroresFront[i] + '</li>';
                charCount += ulErrores.innerHTML.length;
                console.log(charCount);   
            }
        }

    })
})