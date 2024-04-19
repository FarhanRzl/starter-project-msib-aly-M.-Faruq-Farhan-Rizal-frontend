import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi email sederhana
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setErrorMessage('Format email tidak valid.');
      return;
    }

    // Tambahkan logika pengiriman data atau validasi di sini
    console.log(formData);

    // Reset form dan pesan error
    setFormData({
      username: '',
      email: '',
      password: '',
    });
    setErrorMessage('Registrasi berhasil!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center rounded-lg bg-gradient-to-r from-[#DED4B5] via-[#FCF7E9] to-[#DED4B5]">
      <div className=" p-8 w-full max-w-md">
        <h2 className="text-2xl mb-4 text-center ">Registrasi</h2>
        {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1 text-[#A0A0A0] text-start">Username:</label>
            <input 
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-[#A0A0A0] text-start">Email:</label>
            <input 
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-[#A0A0A0] text-start">Password:</label>
            <input 
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="ConfirmPassword" className="block mb-1 text-[#A0A0A0] text-start">Confirm Password:</label>
            <input 
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <Link to={'/Profile_Page'}>
            <button 
              type="submit" 
              className="w-full bg-[#CE9B00] bg-opacity-40 text-white p-2 rounded-md hover:bg-[#CE9B00] focus:outline-none focus:bg-[#CE9B00]"
            >
              Daftar
            </button>
            </Link>
            <button 
              type="submit" 
              className="w-full mt-2 bg-[#B3C8CF] text-white p-2 rounded-md hover:bg-[#CE9B00] focus:outline-none focus:bg-[#CE9B00]"
            >
              I am already have account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
