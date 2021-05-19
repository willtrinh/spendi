import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { appId } from './config/config';
import { Provider } from './context/context';
import './index.css';
import App from './App';

ReactDOM.render(
  <SpeechProvider appId={appId} language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

