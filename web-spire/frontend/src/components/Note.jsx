import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.title,props.id,props._id);
  }

  return (
    <div className="note mcard">
      <h1 className="userc">{props.User}</h1>
      <img src={props.url} alt="gg" className="" style={{width:"320px",textAlign:"center"}} />
      <div className="write">
      <h1>{props.title}</h1>
      <p className="darkF">{props.content}</p>
      </div>
      <button className="but delic" onClick={handleClick}>
        Del
      </button>
    </div>
  );
}

export default Note;
