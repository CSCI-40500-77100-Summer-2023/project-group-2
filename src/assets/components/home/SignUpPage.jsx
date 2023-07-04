import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { UserAuth } from '../../backend/AuthContext';
import { useNavigate } from 'react-router-dom'
const SignUpPage = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        console.log("EVENT", event.target)
        event.preventDefault()
        // prevent the default form submission behavior
        try {
            await createUser(Email, Password);
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
    }, [])
    return (
        <form onSubmit={onSubmit}>
            <h2>Sign Up</h2>
            <input onChange={handleOnchnage} id="Email" type="email" placeholder="Email" required />
            <input onChange={handleOnchnage} id="Password" type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
            <button type="button" className="google-login">Sign Up with Google</button> {/* Google signup button */}
            <Link to="/login">Already have an account? Log In</Link>
        </form>
    );
}

export default SignUpPage;