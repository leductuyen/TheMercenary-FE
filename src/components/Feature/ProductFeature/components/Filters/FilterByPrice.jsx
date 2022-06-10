import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });
    const handlePriceSubmit = () => {
        if (onChange) {
            onChange(values);
        }
    };
    const handleChange = (e) => {
        e.persist();
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <div>
            <TextField
                variant="outlined"
                size="16px"
                name="salePrice_gte"
                value={values.salePrice_gte}
                onChange={handleChange}
            />
            <span>-</span>
            <TextField variant="outlined" name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
            <Button onClick={handlePriceSubmit}>Áp Dụng</Button>
        </div>
    );
}

export default FilterByPrice;
