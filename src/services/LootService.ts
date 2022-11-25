import { LootDeck } from "../models/LootDeck";
import lootJson from '../data/loot.json';

const lootMap: Record<string, number[]> = {
    "money": new Array<number>(0).concat(lootJson.deck.money_1.ids,
        lootJson.deck.money_2.ids, lootJson.deck.money_3.ids),
    "hide": new Array<number>(0).concat(lootJson.deck.hide_1.ids,
        lootJson.deck.hide_2.ids, lootJson.deck.hide_3.ids),
    "lumber": new Array<number>(0).concat(lootJson.deck.lumber_1.ids,
        lootJson.deck.lumber_2.ids, lootJson.deck.lumber_3.ids),
    "metal": new Array<number>(0).concat(lootJson.deck.metal_1.ids,
        lootJson.deck.metal_2.ids, lootJson.deck.metal_3.ids),
    "arrowvine": new Array<number>(0).concat(lootJson.deck.arrowvine.ids),
    "axenut": new Array<number>(0).concat(lootJson.deck.axenut.ids),
    "corpsecap": new Array<number>(0).concat(lootJson.deck.corpsecap.ids),
    "flamefruit": new Array<number>(0).concat(lootJson.deck.flamefruit.ids),
    "rockroot": new Array<number>(0).concat(lootJson.deck.rockroot.ids),
    "snowthistle": new Array<number>(0).concat(lootJson.deck.snowthistle.ids),
    "random": new Array<number>(0).concat(lootJson.deck.random_item.ids)
}

const createCardMap = (): Record<number, string> => {
    let cardMap: Record<number, string> = {};
    const deck = lootJson.deck;
    for (const key in deck) {
        let ids = deck[key as keyof typeof deck].ids;
        for (let i = 0; i < ids.length; i++) {
            cardMap[ids[i]] = key;
        }
    }
    return cardMap;
}

export const cardMap = createCardMap();

const createLootQuantityMap = (): Record<string, Record<number, number>> => {
    let quantityMap: Record<string, Record<number, number>> = {};
    const quantities = lootJson.loot_types;
    for (let i = 0; i < quantities.length; i++) {
        console.log('TYPE ' + quantities[i].type);
        quantityMap[quantities[i].type] = {};
        quantityMap[quantities[i].type][2] = quantities[i]['quantityPerPlayer'][2];
        quantityMap[quantities[i].type][3] = quantities[i]['quantityPerPlayer'][3];
        quantityMap[quantities[i].type][4] = quantities[i]['quantityPerPlayer'][4];
        console.log(quantityMap[quantities[i].type][2]);
        console.log(quantityMap[quantities[i].type][3]);
        console.log(quantityMap[quantities[i].type][4]);
    }

    return quantityMap;
}

export const lootQuantityMap = createLootQuantityMap();

class LootService {

    public shuffleDeck(deck: LootDeck): number[] {
        let cards: number[] = [];

        for (let lootKey in deck.cards) {
            if (deck.cards[lootKey] > 0) {
                let clonedArray = Object.assign([], lootMap[lootKey]);
                let drawnCards: number[] = this.shuffleAndDraw(
                    clonedArray, deck.cards[lootKey])
                cards = cards.concat(drawnCards);
            }
        }

        console.log('PRE SHUFFLE ' + cards);

        this.shuffle(cards);
        this.shuffle(cards);
        this.shuffle(cards);
        this.shuffle(cards);
        this.shuffle(cards);

        console.log('POST SHUFFLE ' + cards);

        return cards;
    }

    private shuffleAndDraw(cards: number[], draw: number): number[] {

        this.shuffle(cards);
        this.shuffle(cards);
        this.shuffle(cards);
        this.shuffle(cards);
        this.shuffle(cards);

        let drawnCards: number[] = new Array<number>(draw);

        for (let i = 0; i < draw; i++) {
            if (cards.length > 0) {
                drawnCards[i] = cards.pop() as number;
            } else {
                console.log("ERROR");
            }
        }

        return drawnCards;
    }

    private shuffle(cards: number[]) {
        for (let i = cards.length - 1; i > 0; i--) {
            let j: number = this.randomIntFromInterval(0, i);
            let temp: number = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
    }

    private randomIntFromInterval(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    public draw(deck: number[]): number {
        if (deck.length > 0) {
            return deck.pop() as number;
        }
        else {
            return -1;
        }
    }
}

export const lootService = new LootService();