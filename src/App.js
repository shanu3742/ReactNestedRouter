import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';

function App() {
  return (
    <div className="App">
  
    <Router>
    <Link to='dashboard'>
    go to Dashboard
    </Link>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="dashboard/*" element={<Dashboard />} />
    <Route path="*" element={<h1>page not found</h1>} />
  </Routes>
    </Router>
   
    </div>
  );
}

export default App;
