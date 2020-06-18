import axios from 'axios';

export const types = {
    REQUEST_RESTAURANTS: 'REQUEST_RESTAURANTS',
    RECEIVE_RESTAURANTS: 'RECEIVE_RESTAURANTS',
    RECEIVE_RESTAURANTS_ERROR: 'RECEIVE_RESTAURANTS_ERROR',
    NAME: 'NAME',
};

export const restaurantActions = {
    setSelectedName: name => ({
        type: types.NAME,
        name
    }),
    loadRestaurants: (city) => {
        return dispatch => {
            dispatch({
                type: types.REQUEST_RESTAURANTS
            })
            return axios
                .get(`${process.env.REACT_APP_API_URL}/restaurants?city=${city}`)
                .then((response) => dispatch(restaurantActions.setRestaurants(response.data.restaurants)))
                .catch((error) => {
                    dispatch(restaurantActions.setRestaurantLoadError(error));
                });
        }
    },
    setRestaurantLoadError: error => ({
        type: types.RECEIVE_RESTAURANTS_ERROR,
        error
    }),
    setRestaurants: restaurants => ({
        type: types.RECEIVE_RESTAURANTS,
        restaurants
    })
}