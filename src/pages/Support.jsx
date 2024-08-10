import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faComments } from '@fortawesome/free-solid-svg-icons';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend API
    console.log('Support form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    // You could also add a success message or redirect the user
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Support Options</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-blue-500" />
              <span>Email: support@brandmark.com</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-3 text-blue-500" />
              <span>Phone: +1 (555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faComments} className="mr-3 text-blue-500" />
              <span>Live Chat: Available 24/7</span>
            </li>
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">FAQ</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>How do I reset my password?</li>
              <li>Can I upgrade my plan?</li>
              <li>What payment methods do you accept?</li>
              <li>How can I request a refund?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;