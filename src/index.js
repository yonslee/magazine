import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { AuthProvider } from './shared/AuthProvider';
import { Provider } from 'react-redux';
import { store } from './redux/configStore'

ReactDOM.render(
  <React.StrictMode>1
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
