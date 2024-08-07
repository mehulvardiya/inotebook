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
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
