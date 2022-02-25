import { combineReducers } from 'redux';
import jjalReducer from './jjal/reducers';

const rootReducer = combineReducers({
  jjalReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
