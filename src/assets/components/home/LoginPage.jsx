import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../backend/AuthContext';

//import './LoginPage.css';
const LoginPage = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const { signIn } = UserAuth();

    const navigate = useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            await signIn(Email, Password);
            navigate('/toggle');
        } catch (error) {
            console.log(error);
        }
    }
    const handleOnchnage = (e) => {
        switch (e.target.id) {
            case "Email":
                setEmail(e.target.value)
                break;
            default:
                setPassword(e.target.value)
                break;
        }
    }
    useEffect(() => {
        if (localStorage.getItem("userId")) {
            window.location.href = "/"
        }
    },[])
    return (
        <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <input onChange={handleOnchnage} id="Email" type="email" placeholder="Email" required />
            <input onChange={handleOnchnage} id="Password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <button type="button" className="google-login">Login with Google</button> {/* Google login button */}
            <Link to="/signup">Don't have an account? Sign Up</Link>
        </form>
    );
}

export default LoginPage;