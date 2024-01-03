import axios from "axios";

const initialState = {
    posts: [],
    count: 0
}

export const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POSTS':
            return {...state, posts: action.payload}
        case 'INCREASE_COUNTER':
            return {...state, count: state.count + 1}
        default:
            return state
    }
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await axios.get('https://dummyjson.com/products?limit=20')
        dispatch({
            type: 'POSTS',
            payload: response.data.products
        })
    }
}

export const increaseCounter = () => {
    return {type: 'INCREASE_COUNTER'}
}