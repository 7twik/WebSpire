import React, { useState } from "react";
//import AddIcon from "@material-ui/icons/Add";
// import Fab from "@material-ui/core/Fab";
// import Zoom from "@material-ui/core/Zoom";
//import axios from "../api/axios";
import axios from 'axios';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function CreateArea(props) {
  // const [isExpanded, setExpanded] = useState(false);
  const [File, setFile]=useState(null);
  const [url,setUrl]=useState("");
  const [done,setDone]=useState(false);
  const [user,setUser]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
   
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  const submitNote =async (event)=> {
    
    const data = new FormData()
    data.append("file",File)
    data.append("upload_preset","notepad")
    data.append("cloud_name","dcyfkgtgv")
    const res= await fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload",{
        method:"post",
        body:data
    })
    const fil=await res.json();
    console.log(fil);
    setUrl(fil);
    setDone(true);
    event.preventDefault();
}
// const [isMousedOver, setMouseOver] = useState(false);
// function handleMouseOver() {
//   setMouseOver(true);
// }

// function handleMouseOut() {
//   setMouseOver(false);
// }
React.useEffect(() => {
  if(File!=="")
  {
    setUser(true);
  }
},[File]);

React.useEffect((event) => {
  if(done===true)
  {
    const newNote = {
      title: note.title,
      content: note.content,
      url: url.secure_url
    };
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      url:""
    });
    axios.post("/note", newNote);
    // event.preventDefault();
    
    setDone(false);
  }
    //window.location.reload();
    // event.preventDefault();
  },[done,note,props,url.secure_url]);


  return (
    <div>
      <form className="create-note" >
        
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        
        <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input 
                type="file" 
                
                onChange={(e)=>setFile(e.target.files[0])} />
            </div>
            <p id="uidnote" className={!user? "instructions" : "offscreen"}>
                            Must Insert Image. in jpg format preferably.
                        </p>
            </div>
            <div className="Submito">
            <h1 onClick={submitNote}>
              Add
          </h1>
          </div>
      </form>
    </div>
  );
}

export default CreateArea;
