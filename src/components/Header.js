import React from "react"

import "../stylesheets/Header.css"

class Header extends React.Component {
  render(){
    return (
      <div id="Header">
        <div id="SearchCont">
        <input id="SearchBox" placeholder="Browse Reports"/>
        <button id="SearchBtn">S</button>
        </div>
        <div id="ProfileCont">
            <div id="ProfileIcon"><h2>AL</h2></div>
            <p>U19101900</p>
            <div id="BellIcon">B</div>
        </div>
      </div>
    )
  }
}
export default Header;