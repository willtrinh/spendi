import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import './index.css';
import App from './App';

ReactDOM.render(
  <SpeechProvider appId="f6b383f7-52a4-4a80-97b8-72a258596951" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

