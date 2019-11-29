const tasksCtrl = {};

const Task = require('../models/Task');

// Obtiene las tareas
tasksCtrl.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
}
// Crea una tarea
tasksCtrl.createTask = async (req, res) =>{ 
    const {title, description, priority, completed, author} = req.body;
    const newTask = new Task({
        title,
        description,
        priority,
        author
    });
    await newTask.save();
    res.send('Task Created')
}

// Obtiene la informacion de una tarea
tasksCtrl.getTask = async (req, res) =>{
    const task = await Task.findById(req.params.id);
    res.json(task);
}
// Actualiza una tarea
tasksCtrl.updateTask = async (req, res) =>{
    const {title, description, priority, completed, author} = req.body;
    await Task.findByIdAndUpdate(req.params.id, {
        title,
        description,
        priority,
        completed,
        author
    });
    res.send('Task Updated')
}
// Borra una tarea
tasksCtrl.deleteTask = async (req, res) =>{    
    await Task.findByIdAndDelete(req.params.id);
    res.send('Task Deleted')
}

module.exports = tasksCtrl;