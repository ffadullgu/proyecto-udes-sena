const mongoose = require('mongoose')
const url = 'mongodb+srv://adm:123@cluster0.zygqf.mongodb.net/db_alumnos'

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 /* useFindAndModify: false,
  useCreateIndex: true*/
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'))
db.once('open', function callback() {
    console.log("¡Conectado a MongoDB!")
})