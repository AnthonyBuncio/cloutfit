import axios from 'axios';

//************ACTION TYPES****************
export const GET_SHOES = 'GET_SHOES';
export const GET_SPECIFIC = 'GET_SPECIFIC';


//****************ACTION CREATORS**************

//Will either return a list of shoes to be shown in `Suggestions.js` component
//Or returns one shoe with images to show in `ShoeGallery.js` component
export const getShoes = (searchQuery) => dispatch => {
    axios
        .get('/api/shoes', {params: searchQuery})
        .then(res => 
            dispatch({
                type: GET_SHOES,
                payload: res.data
            })
        )
};

export const getSpecific = (id) => dispatch => {
    axios
        .get(`/api/shoes/${id}`)
        .then(res =>
            dispatch({
                type: GET_SPECIFIC,
                payload: res.data
            })    
        )
}