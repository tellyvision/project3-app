import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

// STYLE PACKAGES
// import 'spectre.css/dist/spectre.min.css';
// import 'spectre.css/dist/spectre-icons.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
