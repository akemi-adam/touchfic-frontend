import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/auth/Login';
import Dashboard from './pages/Dashboard';

import './assets/bootstrap-5.0.2-dist/css/bootstrap.min.css';
import './assets/bootstrap-5.0.2-dist/js/bootstrap.min.js';
import './App.css';

function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;