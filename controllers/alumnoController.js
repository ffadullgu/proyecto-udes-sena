const Alumno = require('../model/Alumno')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Alumno.find({}, (error, alumnos)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los aprendices'
            })
        }
        return res.render('index', {alumnos: alumnos})
       
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const alumno = new Alumno({
        nombre: req.body.nombre,
        programa: req.body.programa,
        grupo:req.body.grupo
    })
    alumno.save(function(error,alumno){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el Aprendiz'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const programa= req.body.programa_editar
    const grupo= req.body.grupo_editar
    Alumno.findByIdAndUpdate(id, {nombre, programa,grupo}, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el Aptrndiz'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Alumno.findByIdAndRemove(id, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Aprendiz'
            })
        }
        res.redirect('/')
    })
} 