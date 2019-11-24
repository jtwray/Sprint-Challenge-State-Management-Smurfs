import React, { Component, useEffect, useState } from "react";
import { Route, Link } from "react-router-dom"
import { connect } from 'react-redux'

import { fetchSmurfs } from "../actions"

import FetchSmurfs from "./FetchSmurfs";
import CreateSmurf from "./CreateSmurf";

import "./App.css";
import ollie from "../images/olliesmruf.jpg"


const App = (props) => {
  const [smurfs, setSmurfs] = useState([])



  useEffect(() => {


    props.fetchSmurfs()
    return setSmurfs(smurfs)

  }, [])



  return (
    <div className="App">
      <div className="backgroundImage">background</div>

        <nav style={{ display: "flex", justifyContent: "space-around", border: "orange 1px solid", background: "palegoldenrod", color: "slategrey" }}>
          <Link to="/">SMuRF ViLLAGe</Link>
          <Link to="/createSmurf">create SMuRF</Link>
          <Link to="/deleteSmurf">delete SMuRF</Link>
        </nav>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* <img src={ollie} alt="picture of a smurf on a skateboard"/> */}
        <Route exact path="/" component={FetchSmurfs} />
        <Route exact path="/createSmurf" component={CreateSmurf} />


      </div>
    
  );
}
const mapStateToProps = ({ smurfs }) => { return { smurfs } }
export default connect(mapStateToProps, { fetchSmurfs })(App)
