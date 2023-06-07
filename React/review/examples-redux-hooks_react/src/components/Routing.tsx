import * as React from 'react';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { User } from '../pages/User';
import { Route, Switch } from 'react-router-dom';

export function Routing() {
    return (
        <React.Fragment>
            <div className="border">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/user/:firstname/:lastname" component={User} />
                </Switch>
            </div>
        </React.Fragment>
    )
}