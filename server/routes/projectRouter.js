const Router = require('express');
const router = new Router();
const projectController = require('../controllers/projectController');

router.post('/', projectController.create);
router.get('/', projectController.getAllProject);
router.delete('/', projectController.delete);
router.get('/:id', projectController.getProjectById);

module.exports = router