import React from 'react';

import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';
import './Header.css';

// function HeaderContainer() {
//     return (
//         <div className="HeaderContainer">
//             <ImageThumbnail />
//             <HeaderTitle />
//             <HeaderContent />
//         </div>
//     );
// }

// Arrow Function Syntax
const HeaderContainer = () => {
    return (
        <div className="HeaderContainer">
            <ImageThumbnail />
            <div className="title-timestamp-container">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
};

export default HeaderContainer;
