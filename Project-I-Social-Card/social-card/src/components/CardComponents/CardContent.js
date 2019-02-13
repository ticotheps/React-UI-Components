import React from 'react';
import './Card.css';

// function CardContent () {
//     return (
//         <div>
//             <p className="CardContent-getStarted">Get started with React</p>
//             <p className="CardContent-text">
//                 React makes it painless to create interactive UIs. Design
//                 simple views for each state in your application.
//             </p>
//             <p class="CardContent-url">reactjs.org</p>
//         </div>
//     );
// }

// Arrow Function Syntax
const CardContent = () => {
    return (
        <div className="CardContent">
            <p className="CardContent-text">
                <span className="CardContent-getStarted">Get started with React</span> <br/>
                React makes it painless to create interactive UIs. Design
                simple views for<br/> each state in your application. <br />
                <span className="CardContent-reactjs">reactjs.org</span>
            </p>
        </div>
    );
};

export default CardContent;
