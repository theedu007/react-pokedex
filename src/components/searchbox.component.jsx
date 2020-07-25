import React from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search"

const SearchBox = ({ handleChange, handleFetch }) => (
    <div>
        <TextField 
            label='Buscar por nombre' 
            type='search' 
            InputProps={{
                startAdornment: (
                    <InputAdornment>
                        <IconButton onClick={ handleFetch }>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            onChange={ handleChange }
            fullWidth
        />
    </div>
);

export default SearchBox;