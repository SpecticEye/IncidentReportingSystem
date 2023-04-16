import React from "react"
import { Link, useLocation } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
library.add(faDoorOpen);

import "../stylesheets/SidePanel.css"

export default function SidePanel(){

  const { state } = useLocation();
  const Mode = (state != null) ? state.MODE : 0;

  return (
    <div id="SidePanel">
      <div id="Title">IRS</div>
      <div id="MenuCont">
          <h3 className="menu-header">MENU</h3>
          <ul>
          <Link to="/"><li>Dashboard</li></Link>
          <Link to="/Test"><li>Manage Reports</li></Link>
          {(Mode==1) &&  
          <Link to="#"><li>Manage Teams</li></Link>
          }
          {(Mode==2) && <>
            <Link to="#"><li>Manager</li></Link>
            <Link to="#"><li>Instructions</li></Link>
          </>  
          }
          </ul>
          <h3 className="menu-header">OTHERS</h3>
          <ul>
          <Link to="/"><li>Settings</li></Link>
          <Link to="/"><li>Help</li></Link>
          </ul>
      </div>
      <Link to="/Login" id="LogCont"><button id="LogBtn"><FontAwesomeIcon id="LogIcon" icon={faDoorOpen}/>Log Out</button></Link>
    </div>
  )
}

