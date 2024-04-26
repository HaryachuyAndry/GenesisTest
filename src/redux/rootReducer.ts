import {combineReducers} from 'redux';
import appReducer from './app/appSlice';

export const rootReducer = combineReducers({
  app: appReducer,
});
