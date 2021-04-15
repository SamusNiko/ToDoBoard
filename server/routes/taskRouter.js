const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.create);
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);

module.exports = router