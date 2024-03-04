import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'; 
import { reducersFavorites } from '../reducers/reducersFavorites';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; //para poder utilizar varios middlewares en el store

const reducers = combineReducers({

  reducersFavorites
});

export const store = createStore(
  reducers,
  composeEnhancers(
   applyMiddleware(thunk))
)