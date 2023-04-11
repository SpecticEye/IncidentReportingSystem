import React from "react"
import Header from "./Header"
import SidePanel from "./SidePanel"

class Layout extends React.Component {
  render(){
    console.log("hello");
    
    return (
      <div id="LayoutCont1">
        <SidePanel />
        <Header />
        <main id="Main">{this.props.children}</main>
      </div>
    )
  }
}
export default Layout;