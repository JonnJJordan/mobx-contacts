import React from 'react';
import { render } from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'mobx-react';
import store from './stores/ContactStore';

const Root = (
    <Provider store={store}>
        <Router>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Router>
    </Provider>
);

injectTapEventPlugin();

render(Root, document.getElementById('root'));
registerServiceWorker();

