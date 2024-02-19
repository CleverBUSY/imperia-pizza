// RegistrationModal.js

import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import LogoutButton from '../LogoutBtn/LogoutBtn';
import axios from 'axios';

const RegistrationModal = ({ onClose, onUpdateHeader, showCloseIcon }) => {
    const [email, setEmail] = useState(localStorage.getItem('registeredEmail') || '');
    const [name, setName] = useState(localStorage.getItem('registeredName') || '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const instance = axios.create({
        baseURL: "https://65ccdfcfdd519126b83fbccd.mockapi.io/Rewiev/food"
    });

    const handleLogin = async (email, password) => {
        try {
            const response = await instance.get(`/users?email=${email}&password=${password}`);
            return response.data.length > 0;
        } catch (error) {
            console.error('Error checking password:', error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === '' || name === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields');
            return;
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            return;
        }
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            return;
        }
        const isLoginSuccessful = await handleLogin(email, password);
        if (isLoginSuccessful) {
            localStorage.setItem('registeredEmail', email);
            localStorage.setItem('registeredName', name);
            localStorage.setItem('isUserRegistered', 'true');
            setIsRegistered(true);
            onUpdateHeader(name);
        } else {
            setLoginError('Incorrect email or password');
        }
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem('registeredEmail');
        const storedName = localStorage.getItem('registeredName');

        if (storedEmail && storedName) {
            setEmail(storedEmail);
            setName(storedName);
            setIsRegistered(true);
        }
    }, []);

    const handleCloseModal = () => {
        if (!isRegistered) {
            // Если пользователь не зарегистрирован, выводим уведомление
            alert('You need to complete registration before closing the modal');
        } else {
            // Если пользователь зарегистрирован, закрываем модальное окно
            onClose();
        }

        // Если показана иконка закрытия и пользователь зарегистрирован, обновляем заголовок
        if (showCloseIcon && isRegistered) {
            const storedName = localStorage.getItem('registeredName');
            if (storedName) {
                onUpdateHeader(storedName);
            }
        }
    };

    return (
        <div className="modal-wrapper">
            <style>
                {`
                .modal-wrapper {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 1000;
                }

                .modal-content {
                    z-index: 1001;
                }
                `}
            </style>
            <section className="text-gray-600 body-font modal-content">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-2/1 bg-gray-100 rounded-lg p-8 flex flex-col mt-10 md:mt-0">
                        {showCloseIcon && (
                            <button
                                className="absolute top-0 right-0 text-gray-600 hover:text-gray-800 cursor-pointer"
                                onClick={handleCloseModal}
                            >
                                <FaTimes />
                            </button>
                        )}
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                        {!isRegistered ? (
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="relative mb-4">
                                        <p style={{ color: "red" }} className="text-xs text-gray-500 mt-3">{passwordError || confirmPasswordError || loginError}</p>
                                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                                        <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                        <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="confirm-password" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                                        <input type="password" id="confirm-password" name="confirm-password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                    </div>
                                    <p style={{ color: "red" }} className="text-xs text-gray-500 mt-3">{passwordError || confirmPasswordError || loginError}</p>
                                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Sign Up</button>
                                </form>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Registration completed</h2>
                                <p className="text-gray-500 mt-3">Welcome, {name}!</p>
                                <LogoutButton />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RegistrationModal;
