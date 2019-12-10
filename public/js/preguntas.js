function mostrarPregunta(pregunta) {

    document.querySelector("#Pregunta").innerText = pregunta.texto_pregunta;

} 

function mostrarImagen(pregunta) {

    document.querySelector("#imagen-pregunta").setAttribute('src',pregunta.imagen_src);

}

function mostrarRespuesta(pregunta) {

    for(var index=0; index<pregunta.opciones.length; index++) {
        document.querySelector("#respuesta-"+(index+1)).innerText = pregunta.opciones[index];
    }

}

function inicializarColorBoton(id) {
    document.querySelector('#'+id).classList.add("btn-info");
    document.querySelector('#'+id).classList.remove("btn-success");
    document.querySelector('#'+id).classList.remove("btn-danger");
}

function inicializarColorBotones() {
    inicializarColorBoton("respuesta-1")
    inicializarColorBoton("respuesta-2")
    inicializarColorBoton("respuesta-3")
}




function cambiarColorBoton(id,verde) {
    document.querySelector('#'+id).classList.remove("btn-info");
    document.querySelector('#'+id).classList.remove("btn-success");
    document.querySelector('#'+id).classList.remove("btn-danger");
    document.querySelector('#'+id).classList.add(verde?"btn-success":"btn-danger");
}

var numeroDePregunta

function responder(e) {
    //console.dir(e)
    var id = e.id
    var numeroRespuesta = parseInt(id.split('-')[1]) -1;
    console.log(numeroRespuesta)

    var respuestaCorrecta = pregunta.respuesta_correcta
    let numeroRespuestaCorrecta = 0
    if(respuestaCorrecta == pregunta.opciones[numeroRespuesta]) {
        console.log('respuesta correcta')
        numeroRespuestaCorrecta = numeroRespuesta + 1

        cambiarColorBoton(id,true)

    }
    else {
        console.log('respuesta INcorrecta')
        cambiarColorBoton(id,false)
    }


    setTimeout(mostrarRespuestas, 2000, respuestaCorrecta)
}

function mostrarRespuestas(respuestaCorrecta) {
    
    //console.log('mostrarRespuestas')

    //console.log('respuestaCorrecta', respuestaCorrecta)
    for(var index=0; index<pregunta.opciones.length; index++) {
        //console.log(respuestaCorrecta,pregunta.opciones[index])
        if(respuestaCorrecta == pregunta.opciones[index]) {
            console.log('respuesta correcta')
            var id = "respuesta-"+ (index + 1) 
            cambiarColorBoton(id,true)
    
        }
        else {
            console.log('respuesta INcorrecta')
            var id = "respuesta-"+ (index + 1) 
            cambiarColorBoton(id,false)
        }
    }

    setTimeout(getPregunta, 3000)
}

let pregunta
function getPregunta() {
    
    $.get('/pregunta', function(rta) {
        pregunta = rta.pregunta
        console.log(pregunta)

        inicializarColorBotones()
        mostrarPregunta(pregunta)
        mostrarImagen(pregunta)
        mostrarRespuesta(pregunta)
    })
}

getPregunta()