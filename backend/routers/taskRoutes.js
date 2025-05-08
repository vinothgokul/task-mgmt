const express = require("express");
const { body } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const validate = require("../middleware/validate");

const router = express.Router();

router.use(authMiddleware);

router.get("/", getTasks);

router.post(
  "/",
  [
    body("taskName").notEmpty().withMessage("Taskname is required"),
    body("dueDate").notEmpty().withMessage("Due Date is required"),
    validate,
  ],
  createTask
);

router.put(
  "/:id",
  [
    body("taskName").notEmpty().withMessage("Taskname is required"),
    body("dueDate").notEmpty().withMessage("Due Date is required"),
    validate,
  ],
  updateTask
);

router.delete("/:id", deleteTask);

module.exports = router;
