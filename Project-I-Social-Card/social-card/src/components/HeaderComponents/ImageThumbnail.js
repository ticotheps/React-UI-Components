import React from 'react';
import './Header.css';

// function ImageThumbnail () {
//     return (
//         <img className="ImageThumbnail" src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt="Lambda School logo"/>
//     );
// }

// Arrow Function Syntax
const ImageThumbnail = () => {
    return (
        <div className="ImageThumbnail-container">
            <img src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt="Lambda School logo" />
        </div>
    );
};

export default ImageThumbnail;
