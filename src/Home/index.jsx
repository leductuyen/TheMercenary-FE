import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Feature from '../components/Feature';
import Category from '../components/Category';

Home.propTypes = {};

function Home(props) {
    return (
        <div>
            <Header />
            <Category />
            <Feature />
        </div>
    );
}

export default Home;
