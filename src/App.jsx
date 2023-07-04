import './App.css'
import ToggleSwitch from './assets/components/home/ToggleSwitch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/home/Navbar';
import LandingPage from "./assets/components/home/LandingPage";
import LoginPage from './assets/components/home/LoginPage';
import SignUpPage from './assets/components/home/SignUpPage';
import { AuthContextProvider } from './assets/backend/AuthContext';
import PrivateRoute from './assets/backend/PrivateRoute';

const App = () => {

  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/toggle" element={<PrivateRoute><ToggleSwitch /></PrivateRoute>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  )
}

export default App
