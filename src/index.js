import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {DataProvider} from './dataManager'
import './index.css';

import * as serviceWorker from './serviceWorker';


const Application = () => {
  return (
    <DataProvider>
      <App />
    </DataProvider>
  )
}


ReactDOM.render(<Application />, document.getElementById('root'));


serviceWorker.unregister();
