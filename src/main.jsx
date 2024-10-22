import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import App from './App.jsx';
import HomePage from './HomePage.jsx'; // Import the HomePage component
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Route for Home Page */}
        <Route path="/app" element={<App />} /> {/* Route for Main App */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
