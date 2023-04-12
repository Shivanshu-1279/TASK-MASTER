import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// Now when we want to click on home or in about and want to get there, so we have to use "Link" and have to import it, then make changes in the code like, we have to convert "href" into "to" and "<a>" into "<Link>" which is used in react JS.

export default function Header(props) {

  let StyleSheet = {
    height:"66px",
      fontSize: "18px"
  }
  return (
                                                                       
<nav className="navbar navbar-expand-lg bg-light" style={StyleSheet}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={{fontSize:'28px' , fontWeight:"bold"}} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    {  props.searchBar? <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>: "No"}
    </div>
  </div>
</nav>  )
}

// For default props 
Header.defaultProps = {
  title: "My Todos List",
  searchBar: true
}

// For propTypes 
Header.propTypes ={
  title: PropTypes.string,
  searchBar: PropTypes.bool
}