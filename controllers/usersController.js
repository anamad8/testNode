const {User} = require('../models/user.model');
const usersController = {}

usersController.getUser= async (req, res) => {
    const response = await User.findAll().then((data) => {
        const res = {data: data }
        return res;
    }).catch(error => {
        const res = { error: true, message: error }
        return res;
    });
    res.json(response);
}

usersController.createUser= async (req, res) => {
    
    try {
            const modelData = {
                usuario: req.body.usuario,
                email: req.body.email,
                rol:  req.body.rol

            }
            
            const response = await User.create(modelData)
                .then((data) => {
                    const res = { data: data, message: "User Create" }
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

usersController.getByIdUser= async (req, res) => {
    try {
            const { id } = req.params;
            const response = await User.findAll({
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

usersController.updateUser= async (req, res) => {
    try {
            const { id } = req.params;
            let modelData = {
                usuario: req.body.usuario,
                email: req.body.email,
                rol:  req.body.rol
                
            }

            const response = await User.update(modelData, {
                where: { id: id }
            }).then((data) => {
                const res = { error: false, data: data, message: "User Update" }
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

usersController.deleteUser= async (req, res) => {
    try {
            const { id } = req.params;

            const response = await User.destroy({
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



module.exports = usersController