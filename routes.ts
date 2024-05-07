import express from "express";
import Todo from "./schemas/todo";
import { ObjectId } from "mongodb";

const router = express.Router();

// Create a new todo item
router.post("/todos", async (req, res) => {
  const { name, isCompleted } = req.body;

  try {
    const todo = new Todo({ name, isCompleted });
    await todo.save();
    res.status(201).send(todo);
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

// Edit a todo
router.put("/todos/:id", async (req, res) => {
  const { name, isCompleted } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        name,
        isCompleted,
      },
      { new: true },
    );
    res.status(201).send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a todo
router.delete("/todos/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).send({});
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;
