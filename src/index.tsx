import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import devToolsEnhancer from 'remote-redux-devtools';
import './index.css';
import Root from './components/root';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

registerServiceWorker();
