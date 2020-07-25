import React from 'react';
import Carousel from 'react-material-ui-carousel';

import SpriteContainer from './sprite-container.component'

const ImageCarousel = ({ sprites, name }) => {

    const malePokemon = {
        front: undefined,
        back: undefined,
        frontShiny: undefined,
        backShiny: undefined
    };
    const femalePokemon = {
        front: undefined,
        back: undefined,
        frontShiny: undefined,
        backShiny: undefined
    };

    for (const sprite in sprites) {
        
        switch(sprite) {
            case 'back_default':
                malePokemon.back = sprites[sprite];
                break;

            case 'back_female':
                femalePokemon.back = sprites[sprite];
                break;

            case 'back_shiny':
                malePokemon.backShiny = sprites[sprite];
                break;

            case 'back_shiny_female':
                femalePokemon.backShiny = sprites[sprite];
                break;

            case 'front_default':
                malePokemon.front = sprites[sprite];
                break;

            case 'front_female':
                femalePokemon.front = sprites[sprite];
                break;

            case 'front_shiny':
                malePokemon.frontShiny = sprites[sprite];
                break;

            case 'front_shiny_female':
                femalePokemon.frontShiny = sprites[sprite];
                break;
            
            default:
                break;
        }
    }
    
    const CarouselItem = [];

    let counter = 0;
    for (const imageSrc in malePokemon) {
        if(malePokemon[imageSrc]) {
            CarouselItem.push(
                <SpriteContainer key={counter} spriteUrl={ malePokemon[imageSrc] } name={ name } />
            )
            counter++;
        }
    }

    for (const imageSrc in femalePokemon) {
        if(femalePokemon[imageSrc]) {
            CarouselItem.push(
                <SpriteContainer key={counter} spriteUrl={ femalePokemon[imageSrc] } name={ name } />
            )
            counter++;
        }
    }

    if(CarouselItem.length === 0 ) {
        return <div></div>
    }


    return (
        <Carousel>
            { CarouselItem }
        </Carousel>
    )
};

export default ImageCarousel;