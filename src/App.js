import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import User from './components/Users/User';

function App() {
  return (
<>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/User" element={<User />}></Route>

      </Routes>

  </>
  );
}

export default App;
