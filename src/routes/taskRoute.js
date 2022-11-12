const router = require('express').Router();
const controller = require('../controllers/taskController')

router.get("/", controller.getAllTasks);
router.post('/', controller.addTask);

module.exports = router;