import React from 'react';

const SpriteContainer = ({ spriteUrl, name }) => (
    <div>
        <img src={spriteUrl} style={{ height: '150px' }} alt={name} />
    </div>
);

export default SpriteContainer