import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Note</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
