import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger({
  collapsed: true,
  //  level: 'warn',
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  let middleWare = composeEnhancers(applyMiddleware(thunkMiddleware));
  if (localStorage.getItem('devlog') === '1') {
    middleWare = composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware));
  }
  return createStore(
    rootReducer,
    preloadedState,
    middleWare
  )
}