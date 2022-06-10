import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';

Login.propTypes = {};

function Login(props) {
    const handleSubmit = (values) => {
        console.log('Values', values);
    };
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;
