import React, { ReactElement} from 'react';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useSelector } from 'react-redux';

import { AppState } from './states/App.state';

type LootInputProps = {
    id: string
    icon: ReactElement;
}

export const LootInputField = ({ id, icon }: LootInputProps) => {
    const lootState = useSelector((state: AppState) => state.loot);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if (id === 'characters') {
            lootState.deck.characters = parseInt(value);
        } else {
            lootState.deck.cards[id] = parseInt(value);
        }
    }

        return (
		    <TextField
                id={id}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {icon}
                    </InputAdornment>
                  ),
                }}
                onChange={onChangeHandler}
                style={{ width: 65 }}
                type="number"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                variant="standard"
            />
        )

}