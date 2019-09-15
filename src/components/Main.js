import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from './Search.js';
import Favorites from './Favorites';
import Weather from './Weather';
import NotFound from './NotFound';

const Main = () => {
    return (
        <div className="container">
        <Search />
        <Switch>
            <Route exact path="/" component={Weather} />
            <Route exact path="/weather" component={Weather} />
            <Route exact path="/weather/:cityKey" component={Weather} />
            <Route exact path="/favorites" component={Favorites} />
            <Route path="/" component={NotFound} />
        </Switch>
        </div>
    )
}

export default Main;
