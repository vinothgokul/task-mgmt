const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { taskName, description, dueDate } = req.body;

    const task = new Task({
      taskName,
      description,
      dueDate,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating task", error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error getting task", error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { taskName, description, dueDate } = req.body;

    const updated = await Task.findOneAndUpdate(
      { _id: id },
      { taskName, description, dueDate },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Task not found" });

    res.json(updated);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating task", error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const delTask = await Task.findOneAndDelete({ _id: id });

    if (!delTask) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task Deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: err.message });
  }
};
