const mongoose = require('mongoose')
const Schema = mongoose.Schema
const alumnoSchema = new Schema ({
    nombre: String,
    programa:String,
    grupo:Number
}, {versionKey:false})
module.exports = mongoose.model('alumnos', alumnoSchema)