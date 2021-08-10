import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistore, store} from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistore}>
              <App />
          </PersistGate>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
