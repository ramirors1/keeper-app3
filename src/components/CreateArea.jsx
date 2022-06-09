import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  // const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(preNote => {
      return {
        ...preNote,
        [name]: value  //turns name key from string to value of name constant
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({      //clears new note field after the submit button has been clicked
      title:"",
      content:""
    });  
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input 
          name="title" 
          onChange={handleChange} 
          value={note.title} 
          placeholder="Title" 
        />
        <textarea 
          name="content" onChange={handleChange}
          value={note.content}
          placeholder="Take a note..." 
          rows="3"
          />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
