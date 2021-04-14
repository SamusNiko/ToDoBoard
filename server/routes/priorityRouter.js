const Router = require('express');
const router = new Router();
const priorityController = require('../controllers/priorityController');

router.post('/', priorityController.create);
router.get('/', priorityController.getAll);

module.exports = router