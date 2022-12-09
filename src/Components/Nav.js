import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
export default function Nav() {
    return (
      <BrowserRouter>
      <nav className="navbar navbar-light">
            <div className="container-fluid">
                <img className="logo" src="images/logo.png" alt="logo"/>
                <div className="d-flex">
                <Link className="linke" to="/">about</Link>
                <Link className="linke" to="/">work</Link>
                <Link className="linke" to="/">contact</Link>
                </div>
                
            </div>
        </nav>
      </BrowserRouter>
    )
  }