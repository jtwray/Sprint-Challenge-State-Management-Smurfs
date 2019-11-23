import React from "react"
import { connect } from "react-redux"
import { fetchSmurfs } from '../actions'

import { Smurf } from "./Smurf"

const FetchSmurfs = ({smurfs,isLoading,error,fetchSmurfs}) => {



    return (
        <>
            <button onClick={() => fetchSmurfs()}>"calling all smurfs 🤪 🎺!!! "</button>
            {
                error && <>{error}</>

(isLoading)?
<>i think i hear something?</>
            
            :
            
smurfs&& smurfs.map(smurf=> <Smurf key={smurf.id} smurf={smurf} />)
            }
</>

    )
}
const mapStateToProps=({smurfs,isLoading,error})=>smurfs,isLoading,error;

export default connect(mapStateToProps,{fetchSmurfs})(FetchSmurfs)