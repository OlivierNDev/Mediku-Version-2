// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import NurseDashboard from './pages/NurseDashboard';
import AbanyabuzimaDashboard from './pages/AbanyabuzimaDashboard';
import './App.css';


function App() {
  return (
    <Router>
      <div id="root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/nurse-dashboard" element={<NurseDashboard />} />
          <Route path="/abanyabuzima-dashboard" element={<AbanyabuzimaDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
