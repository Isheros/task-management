const tasksCtrl = {};

// Obtiene las tareas
tasksCtrl.getTasks = (req, res) => res.json({message:'test GET'})
// Crea una tarea
tasksCtrl.createTask = (req, res) => res.json({message:'test POST'})

// Obtiene la informacion de una tarea
tasksCtrl.getTask = (req, res) => res.json({message:'test GET'})
// Actualiza una tarea
tasksCtrl.updateTask = (req, res) => res.json({message:'test PUT'})
// Borra una tarea
tasksCtrl.deleteTask = (req, res) => res.json({message:'test DELETE'})

module.exports = tasksCtrl;