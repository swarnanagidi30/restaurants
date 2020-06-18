import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux'
import theme from '../theme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from '../store';


function reduxRender(
    ui,
    {
        initialState,
        store = configureStore(initialState),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return render(ui, { wrapper: Wrapper, ...renderOptions })
}


export default (elements, options) => {
    return reduxRender((
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                {elements}
            </MemoryRouter>
        </ThemeProvider>), options);
}