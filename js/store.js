import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import storage from './reducers/storage';
import menu from './reducers/menu';
import stocks from './reducers/stocks';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,promiseMiddleware())(createStore);

const rootReducer = combineReducers({
  storage,
	menu,
	stocks
});

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}