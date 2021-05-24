const Router = require('express')
const router = new Router();
const taskRouter = require('./taskRouter');
const statusRouter = require('./statusRouter');
const priorityRouter = require('./priorityRouter');
const projectRouter = require('./projectRouter');

router.use('/project', projectRouter);
router.use('/task', taskRouter);
router.use('/status', statusRouter);
router.use('/priority', priorityRouter);

module.exports = router