import { createStore, combineReducers, applyMiddleware} from 'redux';
import tagReducer from './reducers/tagReducer';
import bookReducer from './reducers/bookReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({

  tag:tagReducer,
  book:bookReducer
});
 
export const store = createStore(rootReducer,applyMiddleware(thunk));