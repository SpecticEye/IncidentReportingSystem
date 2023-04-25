import React from "react"
import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch, faBell);

import "../stylesheets/Header.css"

export default function Header() {

  const { state } = useLocation();
  const Mode = (state != null) ? state.MODE : 0;

  return (
    <div id="Header">
      <div id="SearchCont">
      <input id="SearchBox" placeholder="Browse Reports"/>
      <button id="SearchBtn"><FontAwesomeIcon id="SearchIcon" icon="search"/></button>
      </div>
      <div id="ProfileCont">
          <div id="ProfileIcon"><h2>{(Mode == 0) ? "AA" : ((Mode == 1) ? "Mng" : "Mnt")}</h2></div>
          <p>{(Mode == 0) ? "U19101900" : ((Mode == 1) ? "MngID" : "MntID")}</p>
          <div id="BellIcon"><FontAwesomeIcon icon="bell" /></div>
      </div>
    </div>
  )
}