import React, { useState } from 'react';

function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    birthday: '',
    email: '',
    phone: '',
    address: '',
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
      firstName: '',
      lastName: '',
      country: '',
      birthday: '',
      email: '',
      phone: '',
      address: '',
    });
    setErrorMessage('Profil berhasil diperbarui!');
  };


  return (
    <div className="min-h-screen flex rounded-lg bg-gradient-to-r from-[#DED4B5] via-[#FCF7E9] to-[#DED4B5]">
    <div className='container bg-white shadow-md max-w-md text-center'>
    <div className="flex items-center justify-center mb-8 mt-20">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" />
          <img 
            src={formData.photoUrl || 'src/img/User.jpg'} 
            alt="Foto Profil" 
            className="w-32 h-32 rounded-full mb-4"
          />
        </div>
        <div className="mb-8 text-center">
          <h2 className="text-2xl text-text-[#A0A0A0] mb-2">{formData.firstName} {formData.lastName}</h2>
          <h2 className="text-2xl text-text-[#A0A0A0] mb-2">{formData.JobPosition}</h2>
          <h2 className="text-2xl text-text-[#A0A0A0] mb-2">{formData.country}</h2>
        </div>
    </div>
      <div className="container w-full max-w-md p-10">
        <h2 className="text-2xl mb-4 text-start text-[#A0A0A0]">Profil Page</h2>
        {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-4 text-start">
          <div>
            <label htmlFor="firstName" className="block mb-1 text-[#A0A0A0]">First Name:</label>
            <input 
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1 text-[#A0A0A0]">Last Name:</label>
            <input 
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block mb-1 text-[#A0A0A0]">Country:</label>
            <input 
              id="country"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="birthday" className="block mb-1 text-[#A0A0A0]">Birthday:</label>
            <input 
              id="birthday"
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="w-full p-2 border text-[#A0A0A0] rounded-md focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="Job Position" className="block mb-1 text-[#A0A0A0]">Job Position:</label>
            <input 
              id="Job Position"
              type="JobPosition"
              name="JobPosition"
              value={formData.JobPosition}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-[#A0A0A0]">Email:</label>
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
            <label htmlFor="phone" className="block mb-1 text-[#A0A0A0]">Phone:</label>
            <input 
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block mb-1 text-[#A0A0A0]">Address:</label>
            <textarea 
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full bg-[#CE9B00] bg-opacity-40 text-white p-2 rounded-md hover:bg-[#CE9B00] focus:outline-none focus:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      </div>
  );
}

export default ProfilePage;
