import { combineReducers } from 'redux';
import pokeReducer from "./poke/reducers";

export const rootReducer = combineReducers({
    poke: pokeReducer
})