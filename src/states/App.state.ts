import { InitialLootState, LootState } from './Loot.state';

export type AppState = {
    loot: LootState;
};

export const initialState: AppState = {
    loot: InitialLootState
}