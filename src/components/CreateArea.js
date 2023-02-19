import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event){
    const {name , value} = event.target;

    setNote(previousNote => {
      return{
        ...previousNote,
        [name]: value
      }
    });

  }
  function submitNote(event){
    props.onAdd(note);
    event.preventDefault();

  }
  return (
    <div>
      <form>
        <input name="title" 
        value={note.title} 
        placeholder="Title"
        onChange={handleChange} />
        <textarea name="content" 
        value={note.content} 
        placeholder="Take a note..." rows="3"
        onChange={handleChange} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
