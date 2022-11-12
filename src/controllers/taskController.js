const { userInfo } = require('os');
const Task = require('../models/Task')

// add a task
exports.addTask = async(req, res) => {
    try{
        let task = await req.body;
        let add = await Task.add(task)
        if(!add) return res.status(400).json({
            success: false,
            message: "Task has not been added."
        })
        return res.status(200).json({
            success: true,
            message: "Task added successfully!"
        })

    }catch (error) {
        res.status(500).json({
            success: false,
            message: "Oops! Looks like there's a problem with our server. Try again later.",
            error: error.message,
        })
    }
};

// delete a task
exports.deleteTask = async(req, res) => {
    try{
        let id = { _id: req.params.id };
        let deleteTheTask = await Task.findOneAndRemove(id) 
        if(!deleteTheTask)
            return res.status(404).json({
                success: false,
                message: "Task deletion failed."
            });
            return res.status(200).json({
                success: true,
                message: "Task deleted successfully."
            });
        
    }catch (error) {
        res.status(500).json({
            success: false,
            message: ":( Internal Server Error Detected",
            error: error.message,
        });

    }
};
// get all tasks

exports.getAllTasks = async (req, res) => {
    try{
        let tasks = await Task.find();
        if(tasks.length === 0)
            return res.status(404).json({
                success: false,
                message: 'You have no tasks currently.',
            });
        res.status(200).json({
            success: true.valueOf,
            message: "Here are your tasks!",
            tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Ooops. There's a problem with the internal server.",
            errot: error.message
        });

    }
};