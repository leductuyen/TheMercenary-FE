import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Category.module.scss';
Category.propTypes = {};

function Category(props) {
    return (
        <div className={Styles.Category}>
            <div className={Styles.Container}>
                <div className={Styles.Slider}>
                    <a>Trai cay</a>
                </div>
            </div>
        </div>
    );
}

export default Category;
