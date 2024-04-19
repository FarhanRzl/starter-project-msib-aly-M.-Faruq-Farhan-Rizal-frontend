import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            
            const data = await response.json();

            if (data.success) {
                alert('Login berhasil');
            } else {
                alert('Login gagal');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan saat login');
        }
    };

    return (
        <div className="flex justify-end rounded-lg bg-gradient-to-r from-[#DED4B5] via-[#FCF7E9] to-[#DED4B5]">
            <div className="min-h-screen bg-white p-8 shadow-md">
                <h2 className="text-2xl mb-4 text-start ">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='text-start'>
                        <label htmlFor="username" className="block mb-1 text-[#A0A0A0]">Username:</label>
                        <input 
                            id="username"
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div className='text-start'>
                        <label htmlFor="password" className="block mb-1 text-[#A0A0A0]">Password:</label>
                        <input 
                            id="password"
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full bg-[#E5DDC5] text-white p-2 rounded-md hover:bg-[#CE9B00] focus:outline-none focus:bg-[#CE9B00]"
                        >
                            Login
                        </button>
                    </div>
                    <div className='text-center'>
                        <p1 className='text-[#A0A0A0]'>not registered yet? </p1>
                        <Link className='text-[#CE9B00]' to="/register">register now!</Link>
                    </div>
                    <div className='text-center'>
                        <p1>
                            Social Login
                        </p1>
                        <button 
                            type="submit" 
                            className="w-full bg-[#B3C8CF] text-white p-2 rounded-md hover:bg-[#CE9B00] focus:outline-none focus:bg-[#CE9B00]"
                        >
                            Login with facebook
                        </button>
                        <button 
                            type="submit" 
                            className="w-full mt-2 bg-[#B3C8CF] text-white p-2 rounded-md hover:bg-[#CE9B00] focus:outline-none focus:bg-[#CE9B00]"
                        >
                            Login with google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
