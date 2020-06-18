import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-jss'
import './App.scss';

import configureStore from './store';

import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import theme from './theme';

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:city" component={Restaurants} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
