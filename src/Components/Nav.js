import React from 'react'
import { Link,BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Nav() {
    return (
      <BrowserRouter>
      <nav className="navbar navbar-light">
            <div className="container-fluid">
                <img className="logo" src="images/logo.png" alt="logo"/>
                <div className="d-flex">
                <HashLink className="linke" to="#about"><span className='lav'>01.</span>about</HashLink>
                <HashLink className="linke" to="#work"> <span className='lav'>02.</span>work</HashLink>
                <HashLink className="linke" to="#contact"> <span className='lav'>03.</span>contact</HashLink>
                <Link className="linke" to="/resume"><button className='resume'>Resume</button></Link>
                </div>
                
            </div>
        </nav>
       
      </BrowserRouter>
      
    )
  }