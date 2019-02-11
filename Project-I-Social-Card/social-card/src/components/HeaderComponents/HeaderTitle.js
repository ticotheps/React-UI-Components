import React from 'react';
import './Header.css';

function HeaderTitle () {
    return (
        <div className="HeaderTitle">
            <h2 className="HeaderTitle-heading">Lambda School</h2>
            <p className="HeaderTitle-twitter">@LambdaSchool</p>
            <p className="HeaderTitle-timeStamp"></p>
        </div>
    );
}

export default HeaderTitle;