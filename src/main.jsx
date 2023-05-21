import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './routes/Routes.jsx';
import AuthenticationProvider from './providers/AuthenticationProvider';




ReactDOM.createRoot(document.getElementById('root')).render(<AuthenticationProvider><RouterProvider router={router} /></AuthenticationProvider>)
