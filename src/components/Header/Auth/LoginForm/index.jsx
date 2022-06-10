import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '../../../Form-controls/InputField';
import { Button } from '@material-ui/core';
import PassWordField from '../../../Form-controls/PasswordField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const schema = yup.object().shape({
        email: yup.string().required('Please enter your email').email('Please enter a valid email address'),
        password: yup.string().required('Please enter your password').min(6, 'Please enter at lease 6 charaters'),
    });
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="email" label="Email" form={form} />
            <PassWordField name="password" label="Password" form={form} />

            <Button type="submit">Login</Button>
        </form>
    );
}

export default LoginForm;
