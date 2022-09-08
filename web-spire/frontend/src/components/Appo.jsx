import React, { useState, useEffect } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import Axios from "../api/axios";
import $ from "jquery";
import Tilt from 'react-parallax-tilt'

// https://github.com/siddharthkp/react-vanilla-tilt


function Appo() {
  $('link[href*="../index.css"]').prop('disable', true);
  const [notes, setNotes] = useState([]);
  // const [User,setUser]=useState();
  // useEffect(()=>{
  //   fetch("http://localhost:3500/User")
  //   .then(res => res.json())
  //   .then(jsonRes => setUser(jsonRes));
  //   console.log(User);
  // }, [User]);
  // useEffect(()=>{
  //   if (User==="")
  //   {
      
  //   }
  // }, [User]);
  useEffect(()=>{$('link[href*="../index.css"]').prop('disable', true);},[]);
  //for fetching data useEffect, it is taking data from mongodb to paste in notes

  // useEffect(()=>{
  //   axios.get("/api/note").then(res => setNotes(res.data));
  //   // .then(res => res.json())
    
  //   console.log(notes);
  // }, [notes]);
  useEffect(()=>{
    fetch("https://web-spire.herokuapp.com/note").then(res => res.json())
       .then(jsonRes =>{ 
        jsonRes.reverse();
        setNotes(jsonRes);});
  })


 

  useEffect(()=>{
    
    console.log("NOTES from appo.jsx"+notes);
  },[]);

  function deleteNote(user, id,_id) {
    // setNotes(prevNotes => {
    //   return prevNotes.filter((noteItem, index) => {
    //     return index !== id;
    //   });
    // });
    console.log(user+"  |  "+id);
    const newNote={
      title: user,
      id: id,
      _id: _id
    }
    //post
    axios.post("/del", newNote);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    //window.location.reload();
    // .then((res) => console.log(res.data))
    // .catch((err) => console.log(err))
  }
  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div className="appoo">
      <Header />
      
      <CreateArea onAdd={addNote} />
      
      {notes.map((noteItem, index) => {
        return (
          <div>
          <Tilt className="tilt"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={1000}
          scale={0.93}
          gyroscope={true}>
          <Note
            User={noteItem.Username}
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            _id={noteItem._id}
            url={noteItem.url}
          /></Tilt>
          <div className="gap"></div>
          </div>
        );
      })}
      {/* <div className="foot"><hr style={{color:"pink"}} /></div>
      <Footer /> */}
    </div>
  );
}

export default Appo;
