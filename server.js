const express = require('express')
const bodyParser = require('body-parser')
const datos = require('./datos_preguntas')
const app = express()

const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))


var logueado = false

function getPregunta(preguntas) {
    let random = Math.random() //numero random del 0 a 0.999999}
    let cantidadPreguntas = preguntas.length
    preguntaSeleccionada = parseInt(random * cantidadPreguntas)

    return preguntas[preguntaSeleccionada]
}


app.get('/inicio', function(req,res) {
    if(logueado) res.redirect('/transito')
    else res.sendFile(__dirname+'/public/inicio.html')
})

app.get('/login', function(req,res) {
    res.sendFile(__dirname+'/public/login.html')
})

app.post('/login', function(req,res) {
    var email = req.body.email
    var password = req.body.password

    console.log(email,password)

    if(email == 'macarena.caranza@gmail.com' && password == '123') {
        logueado = true
        res.sendFile(__dirname+'/public/loginok.html')
    }
    else {
        logueado = false
        res.sendFile(__dirname+'/public/error.html')

    }

})

app.get('/transito', function(req,res) {
    res.sendFile(__dirname+'/public/transito.html')
})

app.get('/logout', function(req,res) {
    logueado = false
    res.redirect('/despedida')
})

app.get('/despedida', function(req,res) {
    res.sendFile(__dirname+'/public/despedida.html')
})


app.get('/pregunta', function(req,res) {
    let pregunta = getPregunta(datos.preguntas)
    console.log(pregunta)
    
    res.send({pregunta})
})

app.listen(PORT, err => {
    if(err) return console.log('Error en server: ' + err)
    console.log('Servidor escuchando en el puerto: ' + PORT)
})
