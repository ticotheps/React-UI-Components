import React from 'react';
import './Header.css';

// function HeaderTitle () {
//     return (
//         <div className="HeaderTitle">
//             <h2 className="HeaderTitle-heading">Lambda School</h2>
//             <p className="HeaderTitle-twitter">@LambdaSchool</p>
//             <p className="HeaderTitle-timeStamp"></p>
//         </div>
//     );
// }

// Arrow Function Syntax
const HeaderTitle = () => {
    return (
        <div className="HeaderTitle">
            <h2 className="HeaderTitle-heading">Lambda School</h2>
            <p className="HeaderTitle-twitter">@LambdaSchool</p>
            <p className="HeaderTitle-timestamp">26 jan</p>
        </div>
    );
};

export default HeaderTitle;