// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//   };

//   return (
//     <section className="bg-gray-100 h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-2 mt-2 border rounded-md"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-2 mt-2 border rounded-md"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
//             Log In
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [brandName, setBrandName] = useState('');
  const [slogan, setSlogan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="flex h-screen bg-gray-100">
      {/* Left Panel */}
      <div className="w-1/2 bg-blue-200 p-12 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">BRAND NAME</h1>
          <p className="text-white text-xl mb-8">
            The best brand names are short, memorable and easy to Google
          </p>
        </div>
        <button className="bg-white text-blue-500 py-2 px-6 rounded-full inline-flex items-center self-start">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Login
        </button>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 p-12 flex items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Brand name"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Slogan (optional)"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={slogan}
              onChange={(e) => setSlogan(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-gray-200 p-3 rounded-full">
              <FontAwesomeIcon icon={faUser} className="text-gray-600" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;