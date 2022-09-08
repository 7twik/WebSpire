import React from "react";
// import HighlightIcon from "@material-ui/icons/Highlight";
// import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";



function Header() {

  // function click() {
  //   history.replace("/")
  // }
  // const [isMousedOver, setMouseOver] = React.useState(false);
  // function handleMouseOver() {
  //   setMouseOver(true);
  // }

  // function handleMouseOut() {
  //   setMouseOver(false);
  // }
  return (
    <header>
      <h1>
        {/* <HighlightIcon /> */}
        <span className="title">
        Webspire</span>
        <a href="/Post" className="navyh reon"> 
                             All Post </a>
        <a href="/MyPost" className="navyh reon"> 
                My Post </a>
                
      </h1>
      <a href="/" className='reon Logout'>
                           Log out</a>
    </header>
  );
}

export default Header;
