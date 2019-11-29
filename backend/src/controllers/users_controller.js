const usersCtrl = {};

const User = require('../models/User');

// Obtiene los usuarios
usersCtrl.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users);
}
// Crea un usuario
usersCtrl.createUser = async(req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.send('User Created')
}
// Obtiene la informacion de una tarea
usersCtrl.getUser = async (req, res) =>{
    const user = await User.findById(req.params.id);
    res.json(user);
}
// Actualiza una tarea
usersCtrl.updateUser =  async (req, res) =>{
    const {username} = req.body;
    await User.findByIdAndUpdate(req.params.id, {username});
    res.json();
}
// Borra un usuario
usersCtrl.deleteUser = async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('User Deleted')
}
module.exports = usersCtrl;