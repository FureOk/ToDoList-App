const router = require('express').Router();
const controller = require('../controllers/taskController')

router.get("/", controller.getAllTasks);
router.post('/', controller.addTask);
router.delete('/:id', controller.deleteTask);

module.exports = router;