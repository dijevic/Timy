import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Timy } from './Timy';

import './scss/variables/variables.scss';
import './general.css'

ReactDOM.render(

    <Router>
        <Timy />

    </Router>,
    document.getElementById('root')
);


