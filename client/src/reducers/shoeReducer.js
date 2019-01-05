import { combineReducers } from 'redux';
import { GET_SHOES, GET_SPECIFIC } from '../actions/shoeActions';

const initialState = {
    current: [],
    shoes: [],
    showSuggestions: false,
    showGallery: false
}

function shoeReducer(state = initialState, action) {
    switch(action.type) {
        case GET_SHOES:
            return {
                ...state,
                shoes: action.payload,
                showSuggestions: true,
                showGallery: false
            }
        case GET_SPECIFIC:
            return {
                ...state,
                current: action.payload,
                showSuggestions: false,
                showGallery: true
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    shoe: shoeReducer
})

export default rootReducer