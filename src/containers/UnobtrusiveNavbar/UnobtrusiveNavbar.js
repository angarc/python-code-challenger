import React from 'react'
import './UnobtrusiveNavbar.scss'
import { Link } from "react-router-dom";


class UnobtrusiveNavbar extends React.Component {
  state = {
    displayMenu: false
  }

  render() {
    if (this.state.displayMenu) {
     return (
        <div className="UnobtrusiveNavbar__menu">
          <button onClick={() => this.setState({displayMenu: false})} className="UnobtrusiveNavbar">
            <i class="fas fa-times"></i>
          </button>
           <Link className="UnobtrusiveNavbar__menu-link" to="/">Home</Link> 
           <Link className="UnobtrusiveNavbar__menu-link" to="/About">About</Link> 
       </div>
      ) 
    } else {
      return (
        <button onClick={() => this.setState({displayMenu: true})} className="UnobtrusiveNavbar">
          <i class="fas fa-bars"></i>
        </button>
      )
    }
  }
}

export default UnobtrusiveNavbar
