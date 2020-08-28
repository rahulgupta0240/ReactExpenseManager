import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={
            props =>
                localStorage.getItem('isLoggedIn') ?
                    (<Component {...props} />)
                    : (
                        <Redirect to={{
                            pathname: '/Login',
                            state: { from: props.location }
                        }} />
                    )
        }
    />
);