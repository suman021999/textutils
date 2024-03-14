import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (

         // navbar
                    <nav className={`navbar navbar-expand-lg  bg-body-tertiary w-full navbar-${props.mode} bg-${props.mode} `}>
                       <div className="container-fluid">
                        <Link className="navbar-brand" to="/">{props.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                          <ul className="navbar-nav d-flex ">
                            <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/about">{props.abouttext}</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/">Pricing</Link>
                            </li>
                            <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {props.dropdownmanu}
                              </Link>
                              <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                              </ul>
                            </li>
                          </ul>
                          
                        </div>
                        <div className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
                                 <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                 <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkmood</label>
                               </div>
                      </div>
                    </nav>


                    


  )
}

Navbar.propTypes={ 
    title: PropTypes.string.isRequired,
    abouttext:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:'set title here',
    abouttext:'about trext here'
}
 