const {Recursos} = require('../models/recurso.models');
const RecursosController = {}

RecursosController.getRecursos= async (req, res) => {
    const response = await Recursos.findAll().then((data) => {
        const res = {data: data }
        return res;
    }).catch(error => {
        const res = { error: true, message: error }
        return res;
    });
    res.json(response);
}

RecursosController.createRecursos= async (req, res) => {
    
    try {
            const modelData = {
                mensaje: req.body.mensaje
            }
            
            const response = await Recursos.create(modelData)
                .then((data) => {
                    const res = { data: data, message: "Recursos Create" }
                    return res;
                }).catch(e => {
                        return   { message: e }
                });
            res.json(response);
            console.log(req.body)
        } catch (e) {
        console.log(e)
        }
}

RecursosController.getByIdRecursos= async (req, res) => {
    try {
            const { id } = req.params;
            const response = await Recursos.findAll({
                where: { id: id }
            }).then((data) => {
                const res = { error: false, data: data }
                return res;
            }).catch(error => {
                const res = { error: true, message: error }
                return res;
            });
            res.json(response);
        } catch (e) {
            console.log(e);
        }
}

RecursosController.updateRecursos= async (req, res) => {
    try {
            const { id } = req.params;
            let modelData = {
                mensaje: req.body.mensaje
                
            }

            const response = await Recursos.update(modelData, {
                where: { id: id }
            }).then((data) => {
                const res = { error: false, data: data, message: "Recursos Update" }
                return res;
            }).catch(error => {
                const res = { error: true, message: error }
                return res;
            });
            res.json(response);
        } catch (e) {
            console.log(e)
        }
}

RecursosController.deleteRecursos= async (req, res) => {
    try {
            const { id } = req.params;

            const response = await Recursos.destroy({
                where: { id: id }
            }).then((data) => {
                const res = { error: false, data: data, message: "Deleted Successful" }
                return res;
            }).catch(error => {
                const res = { error: true, message: error }
                return res;
            });
            res.json(response);
        } catch (e) {
            console.log(e);
        }
}



module.exports = RecursosController