const task = require('../Models/task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../Error/customError')
const getallTasks = asyncWrapper(async (req, res) => {
        const tasks = await task.find({})
        res.status(201).json({ tasks })
})
const createTask = asyncWrapper(async (req, res) => {
        const tasks = await task.create(req.body)
        res.status(201).json({ tasks })
})
const updateTask = asyncWrapper(async (req, res, next) => {
        const { id: taskID } = req.params;
        const tasks = await task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true })
        if (!tasks) {
                return next(createCustomError(`No task exist with this id: ${taskID} exist`, 404))
        }
        res.status(201).json({ tasks })
})
const deleteTask = asyncWrapper(async (req, res, next) => {
        const { id: taskID } = req.params;
        const tasks = await task.findOneAndDelete({ _id: taskID })
        if (!tasks) {
                return next(createCustomError(`No task exist with this id: ${taskID} exist`, 404))
        }
        const taskse = await task.find({})
        res.status(201).json({ message: 'successfully deleted', tasks_remaining: taskse })

})
const getTask = asyncWrapper(async (req, res, next) => {
        const { id: taskID } = req.params;
        const tasks = await task.findOne({ _id: taskID })
        if (!tasks) {
                return next(createCustomError(`No task exist with this id: ${taskID} exist`, 404))
        }
        res.status(201).json({ tasks })

})
module.exports = { getallTasks, createTask, updateTask, deleteTask, getTask };
