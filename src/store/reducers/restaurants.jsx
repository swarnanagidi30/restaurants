import { types } from '../actions/restaurants';

const header = (state = {
    loading: false,
    name: '',
    restaurants: []
}, action) => {
    switch (action.type) {
        case types.NAME:
            return {
                ...state,
                name: action.name
            }
        case types.REQUEST_RESTAURANTS:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.RECEIVE_RESTAURANTS:
            return {
                ...state,
                loading: false,
                restaurants: action.restaurants,
                error: null
            }
        case types.RECEIVE_RESTAURANTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default header;