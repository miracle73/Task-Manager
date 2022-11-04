const express = require('express');
const router  = express.Router();
const {getallTasks, createTask, updateTask, deleteTask, getTask} = require("../controllers/task.js")
router.route('/').get(getallTasks).post(createTask)
router.route('/:id').delete(deleteTask).get(getTask).put(updateTask)
module.exports = router