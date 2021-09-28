const express = require('express')
const app = express()
var port = process.env.PORT || 8000;

const db = require('./db')


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const alumnos = require('./routes/alumnos')
app.use(alumnos) 

app.get('/', (req, res)=>{
    res.send('comenzamos')
})

app.listen(port, ()=>{
    console.log('¡Servidor listo! en http://localhost:4000')
})