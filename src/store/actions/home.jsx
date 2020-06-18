import fetch from '../../core/fetch';

export const types = {
    SELECTED_CITY: 'SELECTED_CITY',
    REQUEST_CITY: 'REQUEST_CITY',
    RECEIVE_CITY: 'RECEIVE_CITY',
    RECEIVE_CITY_ERROR: 'RECEIVE_CITY_ERROR'
};

export const homeActions = {
    setSelectedCity: portfolio => ((dispatch) => {
        dispatch({
            type: types.PORTFOLIO,
            portfolio
        });

    }),
    loadPortfolios: () => ((dispatch) => {
        dispatch({
            type: types.REQUEST_CITY
        });

        dispatch(fetchPortfolios());
    }),
    setPortfolioLoadError: error => ({
        type: types.RECEIVE_CITY_ERROR,
        error
    }),
    receivePortfolios: portfolios => ({
        type: types.RECEIVE_CITY,
        portfolios
    })
}


const fetchPortfolios = () => {
    return dispatch => {
        fetch('portfolio')
            .then(result => dispatch(homeActions.receivePortfolios(result && result.Rows)))
            .catch((error) => {
                dispatch(homeActions.setPortfolioLoadError(error));
            });
    }
}
