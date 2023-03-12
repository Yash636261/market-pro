import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App=()=>{
  return (
  <>
  <Router basename="/">
    <Navbar/>
    <Routes>
      <Route index element={<Card/>}></Route>
      <Route path="Profile" element={<Profile/>}></Route>
      <Route path="login" element={<Login/>}></Route>
    </Routes>
    <Footer/>
    

  </Router>
  </>
  );
}

export default App;
