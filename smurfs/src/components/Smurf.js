import React from "react"
import {connect} from 'react-redux'
import {updateSmurf,deleteSmurf} from "../actions"

 const Smurf = (props) => {
    console.log(props)
    const{name,age,height,id}=props.smurf;
    return (
        <>
            <div className="smurfCardContainer">
                    <h4>   {name}</h4>   
                <ul>
                    <li>     age:{age}</li>
                    <li>  height:{height} </li>
                    <li>      id:{id}     </li>
                </ul>
                <button onClick={()=>props.deleteSmurf()}>delete</button>
                <button onClick={()=>props.deleteSmurf(props.smurf.id)}>update</button>
            </div>
        </>
    )
}

export default  connect(null,{updateSmurf,deleteSmurf})(Smurf)