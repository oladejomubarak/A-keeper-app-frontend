import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "../style/styles.css"
import notes from "../notes";

function createNote(noteItem){
return <Note title = {noteItem.title} content = {noteItem.content}/>
}
function App() {
  return (
    <div>
      <Header />
       {notes.map(createNote)}
      {/* <Note title="This is the note title" content="This is the note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
