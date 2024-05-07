import express from "express";
import Todo from "./schemas/todo";

const router = express.Router();

// Create a new todo item
router.post("/todos", async (req, res) => {
  const { name, isCompleted } = req.body;

  try {
    const todo = new Todo({ name, isCompleted });
    await todo.save();
    res.send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all todos
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;
