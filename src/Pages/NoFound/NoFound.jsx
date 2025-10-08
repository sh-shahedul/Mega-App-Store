import React from 'react';
 import noFound  from '../../assets/App-Error.png'
const NoFound = () => {
    return (
        <div>
           <img src={noFound} alt="" />
           <h1>OPPS!! APP NOT FOUND</h1>
           <h4>The App you are requesting is not found on our system.  please try another apps</h4>
           <Link to='/apps'>Go BAck</Link>
        </div>
    );
};

export default NoFound;