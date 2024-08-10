import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all Notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjg0NjM5N2JkNGU0MjRkMGRhOWVkIn0sImlhdCI6MTcyMjU2NjQwN30.OlAveatMgVJ3cHktr7Q_pWGKVvsE9CLC4KwwP2B3Pm4",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjg0NjM5N2JkNGU0MjRkMGRhOWVkIn0sImlhdCI6MTcyMjU2NjQwN30.OlAveatMgVJ3cHktr7Q_pWGKVvsE9CLC4KwwP2B3Pm4",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    // Logic to add in client
    console.log("Adding a new note ");
    const note = {
      _id: "66acb2d3ad093ae701e70b3f",
      user: "66ab846397bd4e424d0da9ed",
      title: title,
      description: description,
      tag: tag,
      date: "2024-08-02T10:20:03.365Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjg0NjM5N2JkNGU0MjRkMGRhOWVkIn0sImlhdCI6MTcyMjU2NjQwN30.OlAveatMgVJ3cHktr7Q_pWGKVvsE9CLC4KwwP2B3Pm4",
      },
    });
    const json = response.json();
    console.log(json);

    // Logic to delete in client
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Nots
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjg0NjM5N2JkNGU0MjRkMGRhOWVkIn0sImlhdCI6MTcyMjU2NjQwN30.OlAveatMgVJ3cHktr7Q_pWGKVvsE9CLC4KwwP2B3Pm4",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].description = description;
        newNotes[index].title = title;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
