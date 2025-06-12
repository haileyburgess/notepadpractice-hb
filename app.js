import express from "express";
const app = express();
export default app;
import notesRouter from "./api/notes.js";
import { getNoteById, getNotes, addNote } from "#db/notes";

// tell express to parse and read json request bodies
app.use(express.json());

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.route("/").get((req, res) => {
  res.send("Hello world!");
});

app.use("/notes", notesRouter);

// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong :(");
});
