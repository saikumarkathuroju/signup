import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import './App.css';

const CorporateSignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        const savedToken = localStorage.getItem('authToken');
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else {
            // Simulate a call to the backend and get a token
            const mockToken = "mockAuthToken123456";
            setToken(mockToken);
            localStorage.setItem('authToken', mockToken);
            console.log("Form submitted", { firstName, lastName, email, password, companyName, role });
        }
    };

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('authToken');
    };

    return (
        <div className="background">
            <div className="form-container">
                {token ? (
                    <div>
                        <h2>Welcome!</h2>
                        <p>Token: {token}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2>Corporate Sign Up</h2>
                        <label>
                            First Name:
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Password:
                            <div className="password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </label>
                        <label>
                            Confirm Password:
                            <div className="password-wrapper">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="toggle-password"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </label>
                        <label>
                            Company Name:
                            <input
                                type="text"
                                placeholder="Enter your company name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Role:
                            <input
                                type="text"
                                placeholder="Enter your role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">Sign Up</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default CorporateSignUpForm;
