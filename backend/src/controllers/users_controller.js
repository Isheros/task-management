const usersCtrl = {};

// Obtiene los usuarios
usersCtrl.getUsers = (req, res) => res.json({message:'test GET'})
// Crea un usuario
usersCtrl.createUser = (req, res) => res.json({message:'test POST'})

// Obtiene la informacion de una tarea
//usersCtrl.getTask = (req, res) => res.json({message:'test GET'})
// Actualiza una tarea
//usersCtrl.updateTask = (req, res) => res.json({message:'test PUT'})
// Borra un usuario
usersCtrl.deleteUser = (req, res) => res.json({message:'test DELETE'})

module.exports = usersCtrl;