const Router = require('express')
const router = new Router();
const taskRouter = require('./taskRouter');
const statusRouter = require('./statusRouter');
const priorityRouter = require('./priorityRouter');
const projectRouter = require('./projectRouter');
const userRouter = require('./userRouter');


router.use('/project', projectRouter);
router.use('/task', taskRouter);
router.use('/status', statusRouter);
router.use('/priority', priorityRouter);
router.use('/', userRouter);

module.exports = router