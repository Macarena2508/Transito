$("#boton-enviar").click(enviar)
//document.querySelector("#boton-enviar").addEventListener("click", enviar)
function enviar(e){
    e.preventDefault()
    console.log ("boton enviar")

    if($('#email').val() == 'email@example.com' && $('#password').val() == '123') {
        console.log('login OK!!!')
        location.href = "loginok.html"
    }
    else {
        console.log('error de login!!!!')
        location.href = "error.html"
    }


}