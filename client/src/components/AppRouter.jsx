import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes } from '../routes';
import { TASKS_LIST_ROUTE } from '../utils/const';

const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={TASKS_LIST_ROUTE} />
        </Switch>
    );
};

export default AppRouter;