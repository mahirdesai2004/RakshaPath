import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';
import Landing from './pages/Landing';

import RoutePlanning from './pages/RoutePlanning';

import RouteComparison from './pages/RouteComparison';

// Placeholder Components (to be implemented)
// const Landing = ... (Replaced)
// const RoutePlanning = ... (Replaced)
import SOS from './pages/SOS';
import ReportIncident from './pages/ReportIncident';

// Placeholder Components replaced with real imports

function App() {
  return (
    <Router>
      <div className="app-container" style={{ minHeight: '100vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/plan" element={<RoutePlanning />} />
          <Route path="/compare" element={<RouteComparison />} />
          <Route path="/sos" element={<SOS />} />
          <Route path="/report" element={<ReportIncident />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
