const {Router} = require('express');
const router = Router()

const taskCtrl = require('../controllers/tasks_controllers')

router.route('/')
    .get(taskCtrl.getTasks)
    .post(taskCtrl.createTask)

router.route('/:id')
    .get(taskCtrl.getTask)
    .put(taskCtrl.updateTask)
    .delete(taskCtrl.deleteTask)


module.exports = router;