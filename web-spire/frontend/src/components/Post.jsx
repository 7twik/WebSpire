import React, { useState, useEffect } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Noted from "./Noted";
import Axios from "../api/axios";
//import CreateArea from "./CreateArea";
import axios from 'axios';
// import axios from "axios";
import $ from "jquery";
import Tilt from 'react-parallax-tilt'

function Post(){
    $('link[href*="../index.css"]').prop('disable', true);
  const [notes, setNotes] = useState([]);
  //const [User,setUser]=useState();
  useEffect(()=>{$('link[href*="../index.css"]').prop('disable', true);},[]);
  //for fetching data useEffect, it is taking data from mongodb to paste in notes


  // React.useEffect(()=>{
  //        const fetch = async ()=>{
  //       try{
  //         const response= await axios.get("https://synthisha.herokuapp.com/poost");
  //         response.data.reverse();
  //         setNotes(response.data);
  //     } catch(err){
  //       if (err.response){
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       }else{
  //         console.log(err.message);
  //       }
  //     }
  // }
  // fetch();
  // }, []);


  useEffect(()=>{
    fetch("https://web-spire.herokuapp.com/poost").then(res => res.json())
       .then(jsonRes =>{ 
        jsonRes.reverse();
        setNotes(jsonRes);});
  })

  useEffect(()=>{
  
    console.log(notes);
  },[]);


  return (
    <div className="appoo">
      <Header />      
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
          <Noted
            User={noteItem.Username}
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            
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

export default Post;