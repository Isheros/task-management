const {Router} = require('express');
const router = Router()

const usersCtrl = require('../controllers/users_controller')

router.route('/')
    .get(usersCtrl.getUsers)
    .post(usersCtrl.createUser)

router.route('/:id')
    .get(usersCtrl.getUser)
    .put(usersCtrl.updateUser)
    .delete(usersCtrl.deleteUser)


module.exports = router;