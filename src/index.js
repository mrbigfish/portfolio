import React from 'react';
import './index.css';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import Semantic UI React 0.87.1 Usage Tutorial
import 'semantic-ui-css/semantic.min.css';
// import { history } from './store';
import Root from './components/Root';
import store from './store';

render(
    <Root store={store} />,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
