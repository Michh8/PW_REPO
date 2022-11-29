import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ConfigProvider } from './contexts/ConfigContext';
import { UserContextProvider } from './contexts/UserContext';

import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_APIENDPOINT || "https://solidaria-api.up.railway.app/";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
      <UserContextProvider>
        <App />
        <ToastContainer theme='light' position='bottom-right' />
        <LoadingSpinner />
        </UserContextProvider>
      </ConfigProvider>
    </BrowserRouter>



  </React.StrictMode>
)
//the old one that works but nos baackup
