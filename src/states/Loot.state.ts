import { InitialLootDeck, LootDeck } from "../models/LootDeck"

export type LootState = {
    deck: LootDeck;
    shuffled: number[];
}

export const InitialLootState: LootState = {
    deck: InitialLootDeck,
    shuffled: []
}