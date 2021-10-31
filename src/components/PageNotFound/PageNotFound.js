import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h1>404 Page Not Found</h1>
            <NavLink to='/'><button className="btn btn-sm btn-success">Go to Home</button></NavLink>
        </div>
    );
};

export default PageNotFound;