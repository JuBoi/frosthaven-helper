import { createStore, Store as ReduxStore } from 'redux'

import { rootReducer } from '../reducers/rootReducer';
import { AppState, initialState } from '../states/App.state'

const createFrosthavenStore = (): ReduxStore<AppState> => {
    return createStore(rootReducer, initialState);
};

export const frosthavenStore: ReduxStore<AppState> = createFrosthavenStore();