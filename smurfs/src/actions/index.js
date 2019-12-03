import axios from "axios"

export const GET_SMURFS_START = "GET_SMURFS_START"
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"
export const GET_SMURFS_ERR = "GET_SMURFS_ERR"
export const CREATE_SMURF_START = "CREATE_SMURF_START"
export const CREATE_SMURF_SUCCESS = "CREATE_SMURF_SUCCESS"
export const CREATE_SMURF_ERR = "CREATE_SMURF_ERR"
export const UPDATE_SMURF_START = "UPDATE_SMURF_START"
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS"
export const UPDATE_SMURF_ERR = "UPDATE_SMURF_ERR"
export const DELETE_SMURF_START = "DELETE_SMURF_START"
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS"
export const DELETE_SMURF_ERR = "DELETE_SMURF_ERR"

export const fetchSmurfs = () => dispatch => {

    dispatch({ type: GET_SMURFS_START })

    axios
        .get(`http://localhost:3334/smurfs`)
        .then(response => dispatch({ type: GET_SMURFS_SUCCESS, payload: response.data }))
        .catch(er => dispatch({ type: GET_SMURFS_ERR, payload: er }))
}
export const createSmurf = ({name,age,height}) => dispatch => {

    dispatch({ type: CREATE_SMURF_START })

console.log(name,age,height)

    axios
        .post(`http://localhost:3334/smurfs`,{name,age,height})
        .then(response => dispatch({ type: CREATE_SMURF_SUCCESS, payload: response.data }))
        .catch(er => dispatch({ type: CREATE_SMURF_ERR, payload: er }))
}
export const updateSmurf = (id) => dispatch => {

    dispatch({ type: UPDATE_SMURF_START })

    axios
        .put(`http://localhost:3334/smurfs/${id}`)
        .then(response => dispatch({ type: UPDATE_SMURF_SUCCESS, payload: response.data }))
        .catch(er => dispatch({ type: UPDATE_SMURF_ERR, payload: er }))
}
export const deleteSmurf = (id) => dispatch => {

    dispatch({ type: DELETE_SMURF_START })

    axios
        .delete(`http://localhost:3334/smurfs/${id}`)
        .then(response => dispatch({ type: DELETE_SMURF_SUCCESS, payload: response.data }))
        .catch(er => dispatch({ type: DELETE_SMURF_ERR, payload: er.data.error }))
}