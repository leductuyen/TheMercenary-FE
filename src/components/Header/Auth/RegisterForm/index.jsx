import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '../../../Form-controls/InputField';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            retypepassword: '',
        },
    });
    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="name" label="Name" form={form} />
        </form>
    );
}

export default RegisterForm;
