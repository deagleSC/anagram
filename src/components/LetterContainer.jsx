import React from 'react';
import './LetterContainer.css';

const LetterContainer = ({letter}) => {
    return ( 
        <div className='letterContainer'>
            <span>{letter}</span>
        </div>
    )
}

export default LetterContainer;