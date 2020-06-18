import axios from 'axios';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { restaurantActions, types } from './restaurants';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('axios');

describe('restaurant async actions', () => {

    it('creates REQUEST_RESTAURANTS when fetching restaurants has been done', () => {
        const data = {
            data: {
                restaurants: []
            }
        };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        const expectedActions = [
            { type: types.REQUEST_RESTAURANTS },
            { type: types.RECEIVE_RESTAURANTS, restaurants: data.data.restaurants }
        ]
        const store = mockStore({ restaurants: { restaurants: [] } })

        store.dispatch(restaurantActions.loadRestaurants('test')).then(() => {

            expect(axios.get).toHaveBeenCalledWith(
                `${process.env.REACT_APP_API_URL}/restaurants?city=test`,
            );
            expect(store.getActions()).toEqual(expectedActions)
        });
    })
})

describe('restaurants actions', () => {
    it('should create an action to select name', () => {
        const text = 'name'
        const expectedAction = {
            type: types.NAME,
            name: text
        }
        expect(restaurantActions.setSelectedName(text)).toEqual(expectedAction)
    })
})
