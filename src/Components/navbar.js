import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class navbar extends Component {
  render() {
    return (
      <div className="Navbar" style={{ display: 'flex', padding: '1rem', alignItems: 'center', justifyContent: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}><h1 style={{ fontSize: '1.6rem' }}>Movies App</h1></Link>
        <Link to="/fav" style={{ textDecoration: "none"  }}><h2 style={{ marginLeft: '1rem', fontSize: '1.3rem' }}>Favourites</h2> </Link>

      </div>
    )
  }
}
