import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyCompononet } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store  } from './components/redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MyCompononet /></Provider>
    
   
  </React.StrictMode>
);
