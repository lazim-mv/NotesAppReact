import React,{useState} from "react";

function CreateArea(props) {
  const [note, setNote]= useState({
    title:"",
    content:""
  });

  function handleChange(e){
    const {name,value} = e.target;
    setNote(prevNote => {
      return{
        ...prevNote,
        [name]:value
      }
    })
  }

  function submitNote(s){
    props.onAdd(note);
    s.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
        <textarea onChange={handleChange} name="content"value={note.content} placeholder="Take a note..." rows="3" />
        <button type="Submit" onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
