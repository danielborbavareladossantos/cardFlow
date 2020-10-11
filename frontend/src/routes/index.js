// import React from 'react';
import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Configuracoes from '../pages/Configuracoes';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
    return (
        <Switch>
            <Route path={"/"} exact component={SignIn} />
            <Route path={"/signup"} exact component={SignUp} />
            <Route path={"/dashboard"} component={Dashboard} isPrivate />
            <Route path={"/configuracoes"} component={Configuracoes} isPrivate />
            <Route path={"/profile"} component={Profile} isPrivate />
            {/* <Route path={"*"} exact={true} component={Error} /> */}
        </Switch>
    );
}
