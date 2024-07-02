'use client'
import React, { useState } from 'react';
import ArrowButton from './ui/ArrowButton';

export const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., sending data to a server
        console.log(formData);
    };

    return (
        <div id="contact" className='bg-slate-950 flex flex-col w-full h-auto relative p-24 gap-6 overflow-hidden'>
            <p>Contact Us</p>
            <h2 className='text-2xl md:text-4xl w-full md:max-w-3xl'>
                Have questions? We&apos;re here to help.
            </h2>
            <span>
                Fill out the contact form below.
            </span>
            <div className="flex flex-col md:flex-row gap-10">
                <form onSubmit={handleSubmit} className='relative flex flex-col flex-grow gap-4 w-full md:max-w-[50vw]'>
                    <div className='flex flex-col md:flex-row gap-4 w-full'>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className='text-black flex-grow p-2 rounded bg-gray-200'
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className='text-black flex-grow p-2 rounded bg-gray-200'
                            required
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className='text-black w-full p-2 rounded bg-gray-200'
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className='text-black flex-grow p-2 rounded bg-gray-200'
                        required
                    />
                    <ArrowButton>Submit Now</ArrowButton>
                </form>
                <div className="bg-[url(/contactbg.webp)] h-[50vh] w-full md:w-[50vw] bg-cover bg-no-repeat bg-center">
                </div>
            </div>

        </div>
    );
}
