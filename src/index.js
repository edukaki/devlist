import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/router';
import { AuthContextProvider } from './context/AuthContext';
import './index.css';
import { ProjectContextProvider } from './context/ProjectsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProjectContextProvider>
        <RouterProvider router={router} />
      </ProjectContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
