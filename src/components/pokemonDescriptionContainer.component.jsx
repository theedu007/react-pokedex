import React from 'react';
import { Box } from '@material-ui/core'

import'./pokemonDescriptionContainer.styles.css';

const PokemonDescriptionContainer = ({ speciesData }) => {

    if(Object.keys(speciesData).length === 0 && speciesData.constructor === Object) {
        return <div></div>
    }

    const descriptionArray = speciesData.flavor_text_entries
                            .filter(textData => textData.language.name === 'es');

    const lastDescription = descriptionArray[descriptionArray.length - 1];
    debugger;
    return (
        <div>
           <Box p={2}>
            <p className={"pokemon-description"}>{ lastDescription.flavor_text.trim() }</p>
           </Box>
        </div>
    )
}

export default PokemonDescriptionContainer;