import React from "react"
import { Link } from "react-router-dom"

import "../stylesheets/SidePanel.css"

class SidePanel extends React.Component {
  render(){
    return (
      <div id="SidePanel">
        <div id="Title">IRS</div>
        <div id="MenuCont">
            <h3 className="menu-header">MENU</h3>
            <ul>
            <Link to="/"><li>Dashboard</li></Link>
            <Link to="/Test"><li>Manage Reports</li></Link>
            </ul>
            <h3 className="menu-header">OTHERS</h3>
            <ul>
            <Link to="/"><li>Settings</li></Link>
            <Link to="/"><li>Help</li></Link>
            </ul>
        </div>
        <div id="LogCont"><button>Log Out</button></div>
      </div>
    )
  }
}
export default SidePanel;