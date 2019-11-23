import React, { Component } from "react";
import {Route,Link} from "react-router-dom"
 import  ollie from "../images/olliesmruf.jpg"
import "./App.css";
import FetchSmurfs from "./FetchSmurfs";
import CreateSmurf from "./CreateSmurf";
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav style={{display:"flex", justifyContent:"space-around", border:"orange 1px solid",background:"palegoldenrod",color:"slategrey"}}>
          <Link to="/">SMuRF ViLLAGe</Link>
          <Link to="/createSmurf">create SMuRF</Link>
          <Link to="/deleteSmurf">delete SMuRF</Link>
        </nav>
        <h1>SMURFS! 2.0 W/ Redux</h1>
      <Route exact path="/" component={FetchSmurfs}/>
      <Route exact path="/createSmurf" component={CreateSmurf}/>

       
      </div>
    );
  }
}

export default App;
