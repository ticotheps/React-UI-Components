import React from 'react';
import './Card.css';

// function CardBanner () {
//     return (
//         <div className="CardBanner">
//             <img src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" />
//         </div>
//     );
// }

// Arrow Function Syntax
const CardBanner = () => {
    return (
        <div className="CardBanner-container">
            <img className="CardBanner-image" src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" />
        </div>
    );
};

export default CardBanner;