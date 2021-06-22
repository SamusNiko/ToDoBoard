import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes } from '../routes';
import { AUTH_ROUTE } from '../utils/const';

const AuthRouter = () => {
    return (
        <Switch>
            {authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={AUTH_ROUTE} />
        </Switch>
    );
};

export default AuthRouter;