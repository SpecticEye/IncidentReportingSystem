import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch, faBell);

import "../stylesheets/Header.css"

class Header extends React.Component {
  render(){
    return (
      <div id="Header">
        <div id="SearchCont">
        <input id="SearchBox" placeholder="Browse Reports"/>
        <button id="SearchBtn"><FontAwesomeIcon id="SearchIcon" icon="search"/></button>
        </div>
        <div id="ProfileCont">
            <div id="ProfileIcon"><h2>AL</h2></div>
            <p>U19101900</p>
            <div id="BellIcon"><FontAwesomeIcon icon="bell" /></div>
        </div>
      </div>
    )
  }
}
export default Header;