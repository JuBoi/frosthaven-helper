import { combineReducers } from 'redux';

import { AppState } from '../states/App.state';

import { LootReducer } from './LootReducer.reducer';

export const rootReducer = combineReducers<AppState>({
    loot: LootReducer
})