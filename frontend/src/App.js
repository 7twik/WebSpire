import Register from './Register';
import Login from './Login';
import React from "react";
import Appo from "./components/Appo"
import Post from "./components/Post"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  return (
    <div>
      
      <Router>
      <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
            <Route path="/Register" element={<Register />} />
        </Routes>
        <Routes>
            <Route path="/MyPost" element={<Appo />} />
        </Routes>
        <Routes>
            <Route path="/Post" element={<Post />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;