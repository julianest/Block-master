import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppRoutes from './routes/AppRoutes';
import './styles/index.css';
// import App from './containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Provider store={store} >
          <AppRoutes />
      </Provider>
  </>
);
