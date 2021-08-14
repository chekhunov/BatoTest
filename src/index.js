import React                     from 'react';
import ReactDOM                  from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import state from './state/state';
import './scss/index.scss';
import App                       from './App';

ReactDOM.render(
    <React.StrictMode >
        <Router >
            <App appState={state} />
        </Router >
    </React.StrictMode >,
    document.getElementById('root')
);
