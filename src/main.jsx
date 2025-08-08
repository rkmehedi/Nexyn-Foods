import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router } from 'react-router'
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from "react-router";
import router from "./components/Routes/Router.jsx";
import { ToastContainer } from 'react-toastify';
import AuthContext from './components/Pages/AuthContext'
import Layout from "./components/Layout.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />;
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </AuthContext>
    
  </StrictMode>,
)
