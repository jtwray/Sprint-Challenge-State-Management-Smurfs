import axios from "axios"

export const GET_SMURFS_START = "GET_SMURFS_START"
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"
export const GET_SMURFS_ERR = "GET_SMURFS_ERR"

export const fetchSmurfs = () => dispatch => {

    dispatch({ type: GET_SMURFS_START })

    axios
        .get(`https://localhost/3334/smurfs`)
        .then(response => dispatch({ type: GET_SMURFS_SUCCESS, payload: response.data }))
        .catch(er => dispatch({ type: GET_SMURFS_ERR, payload: er }))
}
export const createSmurf = () => dispatch => {

    dispatch({ type: CREATE_SMURF_START })

    axios
        .post(`https://localhost/3334/smurfs`)
        .then(response => dispatch({ type: CREATE_SMURF_SUCCESS, payload: response.data }))
        .catch(er => dispatch({ type: CREATE_SMURF_ERR, payload: er }))
}
export const updateSmurf = () => dispatch => {

    dispatch({ type: UPDATE_SMURF_START })

    axios
        .put(`https://localhost/3334/smurfs/${id}`)
        .then(response => dispatch({ type: UPDATE_SMURF_SUCCESS, payload: response.data }))
        .catch(er => dispatch({ type: UPDATE_SMURF_ERR, payload: er }))
}
export const deleteSmurf = () => dispatch => {

    dispatch({ type: DELETE_SMURF_START })

    axios
        .delete(`https://localhost/3334/smurfs/${id}`)
        .then(response => dispatch({ type: DELETE_SMURF_SUCCESS, payload: response.data }))
        .catch(er => dispatch({ type: DELETE_SMURF_ERR, payload: er }))
}