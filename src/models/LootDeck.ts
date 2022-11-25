
export type LootDeck = {
	cards: Record<string, number>;
	characters: number;
};

const initializeCards = (): Record<string, number> => {
	const newCards: Record<string, number> = {};

	newCards['money'] = 0;
	newCards['hide'] = 0;
	newCards['lumber'] = 0;
	newCards['metal'] = 0;
	newCards['arrowvine'] = 0;
	newCards['axenut'] = 0;
	newCards['corpsecap'] = 0;
	newCards['flamefruit'] = 0;
	newCards['rockroot'] = 0;
	newCards['snowthistle'] = 0;
	newCards['random'] = 0;

	return newCards;
}

export const InitialLootDeck: LootDeck = {
	cards: initializeCards(),
	characters: 0
}