import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>
        {" "}
        This is About {a.state.name} and he is class {a.state.class}
      </h1>
    </div>
  );
};

export default About;
