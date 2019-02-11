import React from 'react';

import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';
import './Header.css';

function HeaderContainer() {
    return (
        <div className="HeaderContainer">
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
}

export default HeaderContainer;
