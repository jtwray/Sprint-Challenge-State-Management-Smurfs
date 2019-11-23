import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createSmurf } from '../actions'


const CreateSmurf = (props) => {

    const [smurf, setSmurf] = useState({ name: "", age: "", height: "" })

    const handleChange = (e) => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
        console.log(smurf)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createSmurf(smurf);
    }


    return (


        <form onSubmit={handleSubmit} >

            <input
                name="name"
                value={smurf.name}
                placeholder="name"
                onChange={handleChange}
            />


            <input
                name="age"
                value={smurf.age}
                placeholder="age"
                onChange={handleChange}
            />


            <input
                name="height"
                value={smurf.height}
                placeholder="height"
                onChange={handleChange}
            />

            <button>create</button>
        </form>

    )

}
const mapStateToProps = state => { return { smurfs: state.smurfs, isLoading: state.isLoading, error: state.error, } }

export default connect(mapStateToProps, { createSmurf })(CreateSmurf)