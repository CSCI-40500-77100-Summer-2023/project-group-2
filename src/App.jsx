import './App.css'
import ToggleSwitch from './assets/components/home/ToggleSwitch'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navbar from './assets/components/home/Navbar';
//import LandingPage from "./assets/components/home/LandingPage";
//import LoginPage from './assets/components/home/LoginPage';
//import SignUpPage from './assets/components/home/SignUpPage';
//import { AuthContextProvider } from './assets/backend/AuthContext';
//import PrivateRoute from './assets/backend/PrivateRoute';
//import { LoginData } from './assets/components/home/LoginData';
//import { UserAuth } from './assets/backend/AuthContext';
const App = () => {
/*
  const user = UserAuth();
  let id = 0;
  if(user) {
    console.log("User is logged in");
    id = 1;
  } else {
    console.log("User is not logged in");
    id = 0;
  }
  */
  return (
    <div className="App">
    <ToggleSwitch />
    </div>
  )
}

export default App
