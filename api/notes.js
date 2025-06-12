// TODO: this file :)
import { getNoteById, getNotes, addNote } from "#db/notes";
import express from "express";

const router = express.Router();

export default router;

router
  .route("/")
  .get((req, res) => {
    const notes = getNotes();
    res.send(notes);
  })
  .post((req, res) => {
    if (!req.body) return res.status(400).send("Request must have a body.");
    const { text } = req.body;
    if (!text) return res.status(400).send("New note must have text.");
    const newNote = addNote(text);
    res.status(201).send(newNote);
  });

router.route("/:id").get((req, res) => {
  const { id } = req.params;
  const note = getNoteById(+id);

  if (!note) {
    return res.status(404).send("No note with this ID found");
  }
  res.send(note);
});
