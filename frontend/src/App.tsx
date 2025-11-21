import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Dashboard from './pages/Dashboard';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="stocks" element={<div className="text-2xl font-bold">Stocks Page</div>} />
          <Route path="analytics" element={<div className="text-2xl font-bold">Analytics Page</div>} />
          <Route path="calendar" element={<div className="text-2xl font-bold">Calendar Page</div>} />
          <Route path="messages" element={<div className="text-2xl font-bold">Messages Page</div>} />
          <Route path="users" element={<div className="text-2xl font-bold">Users Page</div>} />
          <Route path="reports" element={<div className="text-2xl font-bold">Reports Page</div>} />
          <Route path="settings" element={<div className="text-2xl font-bold">Settings Page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
