import React,{useEffect} from "react"
import { connect } from "react-redux"
import { fetchSmurfs } from '../actions'

import Smurf  from "./Smurf"

const FetchSmurfs = ({ smurfs, isLoading, error, fetchSmurfs }) => {
    
    useEffect(()=>{
    const fetchtheSmurfs=()=>{

        fetchSmurfs()
    
    }
    },[])

    return (
        <>
            <button onClick={() => fetchSmurfs()}>calling all smurfs🤪🎺!!! </button>
            {
                error && <>{error}</>({isLoading})
                ?
           ( <>i think i hear something?</>)
                :
            smurfs && smurfs.map((smurf,index)=> <Smurf key={`${smurf.id}${Date.now()}${index}`} smurf={smurf} />)
            }
        </>
    )
}
const mapStateToProps = (state) => {
    return { smurfs:state.smurfs, isLoading:state.isLoading, error:state.error }
}
export default connect(mapStateToProps, { fetchSmurfs })(FetchSmurfs)