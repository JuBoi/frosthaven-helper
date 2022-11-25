import { Action } from '@reduxjs/toolkit'
import { LootState, InitialLootState } from '../states/Loot.state'
import { Reducer } from 'redux'

export const LootReducer: Reducer<LootState, Action> = (
	state: LootState = InitialLootState,
	action: Action
): LootState => {

	return state;
}