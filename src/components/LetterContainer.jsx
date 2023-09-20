import React, { useState } from 'react';
import './LetterContainer.css';

const LetterContainer = ({letter, color, changedColor}) => {

    const [background, setBackground] = useState(color)

    return ( 
        <div className='letterContainer'
        style={{backgroundColor: color}}
        >
            <span>{letter}</span>
        </div>
    )
}

export default LetterContainer;