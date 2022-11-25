import './App.css';

import {ArrowvineIcon, AxenutIcon, CorpsecapIcon,
FlamefruitIcon, HideIcon, LumberIcon, MetalIcon, 
MoneyIcon, RandomIcon, RockrootIcon, SnowthistleIcon} from './Icons';
import { LootInputField } from './LootInputField';
import { AppState } from './states/App.state';
import { cardMap, lootService, lootQuantityMap } from './services/LootService';

import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

export const App = () => {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const shuffleButtonStyle = {
        margin: '10px 10px 0px 10px'
    };

    const lootState = useSelector((state: AppState) => state.loot);

    const [open, setOpen] = React.useState(false);
    const [loot, setLoot] = React.useState('');

    const handleClose = () => setOpen(false);

    const OnClickShuffle = () => {
        let shuffled: number[] = lootService.shuffleDeck(lootState.deck);
        console.log("Shuffle Clicked");
        lootState.shuffled = shuffled;
    };

    const OnClickDraw = () => {
        let card:number = lootService.draw(lootState.shuffled);
        console.log("Draw Clicked: " + card);
        if (card > 0) {
            let cardType: string = cardMap[card];
            let quantity: number = lootQuantityMap[cardType][lootState.deck.characters];

            console.log('TYPE: ' + cardType + ' ' + 'Quantity: ' + quantity)
            setLoot('+' + quantity + ' ' + cardType);
            setOpen(true);
        }
    }

    return (
    <div className="App">
        <header className="App-header">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        CHA-CHING
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {loot}
                    </Typography>
                </Box>
            </Modal>

            <div className="Loot-select" >
                <p> $$ </p>
                <LootInputField id='money' icon={<MoneyIcon />}/>
                <LootInputField id='random' icon={<RandomIcon />}/>
                <p> Material </p>
                <LootInputField id='lumber' icon={<LumberIcon />}/>
                <LootInputField id='metal' icon={<MetalIcon />}/>
                <LootInputField id='hide' icon={<HideIcon />}/>
                <p> Herbs </p>
                <LootInputField id='arrowvine' icon={<ArrowvineIcon />}/>
                <LootInputField id='axenut' icon={<AxenutIcon />}/>
                <LootInputField id='corpsecap' icon={<CorpsecapIcon />}/>
                <LootInputField id='flamefruit' icon={<FlamefruitIcon />}/>
                <LootInputField id='rockroot' icon={<RockrootIcon />}/>
                <LootInputField id='snowthistle' icon={<SnowthistleIcon />}/>
                <p> Characters </p>
                <LootInputField id='characters' icon={<AccountCircle />} />

                <Button
                    variant="contained"
                    sx={shuffleButtonStyle}
                    onClick={OnClickShuffle}>Shuffle</Button>
            </div>
            <Button
                variant="contained" className="Shuffle-button"
                onClick={OnClickDraw}>Draw</Button>
        </header>
    </div>
    );
}
