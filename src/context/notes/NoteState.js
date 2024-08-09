import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "66ac94f660f84da6bf14be00",
      user: "66ab846397bd4e424d0da9ed",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2024-08-02T08:12:38.841Z",
      __v: 0,
    },
    {
      _id: "66acb2d3ad093ae701e70b3a",
      user: "66ab846397bd4e424d0da9ed",
      title: "New note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2024-08-02T10:20:03.365Z",
      __v: 0,
    },
    {
      _id: "66ac94f660f84da6bf14be01",
      user: "66ab846397bd4e424d0da9ed",
      title: "My Title1",
      description: "Please wake up early",
      tag: "personal",
      date: "2024-08-02T08:12:38.841Z",
      __v: 0,
    },
    {
      _id: "66acb2d3ad093ae701e70b3b",
      user: "66ab846397bd4e424d0da9ed",
      title: "New note1",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2024-08-02T10:20:03.365Z",
      __v: 0,
    },
    {
      _id: "66ac94f660f84da6bf14be02",
      user: "66ab846397bd4e424d0da9ed",
      title: "My Title2",
      description: "Please wake up early",
      tag: "personal",
      date: "2024-08-02T08:12:38.841Z",
      __v: 0,
    },
    {
      _id: "66acb2d3ad093ae701e70b3c",
      user: "66ab846397bd4e424d0da9ed",
      title: "New note2",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2024-08-02T10:20:03.365Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const addNote = (title, description, tag) => {
    console.log("Adding a new note ");
    const note = {
      "_id": "66acb2d3ad093ae701e70b3f",
      "user": "66ab846397bd4e424d0da9ed",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-08-02T10:20:03.365Z",
      "__v": 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = () => {

  };

  //Edit a Nots
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
