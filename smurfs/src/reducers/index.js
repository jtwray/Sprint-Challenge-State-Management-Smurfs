import {
    GET_SMURFS_START,      GET_SMURFS_SUCCESS,      GET_SMURFS_ERR,           
    CREATE_SMURF_START,    CREATE_SMURF_SUCCESS,    CREATE_SMURF_ERR,
    UPDATE_SMURF_START,    UPDATE_SMURF_SUCCESS,    UPDATE_SMURF_ERR,
    DELETE_SMURF_START,    DELETE_SMURF_SUCCESS,    DELETE_SMURF_ERR,
} from '../actions'

const initialState = { smurfs: [], isLoading: false, error: "", }

const reducerIndex = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS_START: {
            return { ...state, isLoading: true, }
        }
        case GET_SMURFS_SUCCESS: {
            return { ...state, isLoading: false, smurfs: [...action.payload] }
        }
        case GET_SMURFS_ERR: {
            return { ...state, error: action.payload, isLoading: false, }
        }
        case CREATE_SMURF_START: {
            return { ...state, isLoading: true, }
        }
        case CREATE_SMURF_SUCCESS: {
            return { ...state, isLoading: false, smurfs: [...state.smurfs, action.payload] }
        }
        case CREATE_SMURF_ERR: {
            return { ...state, error: action.payload, isLoading: false, }
        }
        case UPDATE_SMURF_START: {
            return { ...state, isLoading: true, }
        }
        case UPDATE_SMURF_SUCCESS: {
            return { ...state, isLoading: false, smurfs: [...state.smurfs, action.payload] }
        }
        case UPDATE_SMURF_ERR: {
            return { ...state, error: action.payload, isLoading: false, }
        }
        case DELETE_SMURF_START: {
            return { ...state, isLoading: true, }
        }
        case DELETE_SMURF_SUCCESS: {
            return { ...state, isLoading: false, smurfs: [...state.smurfs, action.payload] }
        }
        case DELETE_SMURF_ERR: {
            return { ...state, error: action.payload, isLoading: false, }
        }
        default:
            return { ...state, }
    }
}
export default reducerIndex

