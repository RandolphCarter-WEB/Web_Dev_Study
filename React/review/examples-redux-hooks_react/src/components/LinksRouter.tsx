import * as React from 'react';
import { Link } from 'react-router-dom';
import { Routing } from './Routing';

export function LinksRouter() {
    return (
        <React.Fragment>
            <div>
                <div>
                    <h3>Basic Example of Router with hooks USING useParam , useLocation </h3>
                </div>
                <div className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={{ pathname: "/about", state: { from: "root" } }}>About</Link></li>
                    <li><Link to="/user/pedro/delrio">User</Link></li>
                </div>
                <Routing />
            </div>
        </React.Fragment>
    )
}