import React from 'react';

import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';
import './Card.css';

// function CardContainer () {
//     return (
//         <div className="CardContainer">
//             <CardBanner />
//             <CardContent />
//         </div>
//     );
// }

// Arrow Function Syntax 
const CardContainer = () => {
    return (
        <div className="CardContainer">
            <CardBanner />
            <CardContent />
        </div>
    );
};

export default CardContainer;