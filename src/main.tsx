import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout';
import ErrorBoundary from './components/commen/pages/ErrorBoundary';
import './index.css';

const router = createBrowserRouter([
  {element:<HomeLayout /> , path: '/' , errorElement:<ErrorBoundary />}
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)