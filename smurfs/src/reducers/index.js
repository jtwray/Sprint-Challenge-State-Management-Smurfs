import {GET_SMURFS_START,GET_SMURFS_ERR,GET_SMURFS_SUCCESS} from '../actions'

const initialState = {smurfs:[]}

const reducerIndex = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS_START: {
            return { ...state, isLoading: true, }
        }
        case GET_SMURFS_SUCCESS: {
            return { ...state, isLoading: false, }
        }
        case GET_SMURFS_ERR: {
            return { ...state, error: action.payload, isLoading: false, }
        }
        default:
            return { ...state, }
    }
}
export default reducerIndex