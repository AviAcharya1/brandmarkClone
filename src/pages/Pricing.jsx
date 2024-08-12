// import React from 'react';

// const Pricing = () => {
//   const plans = [
//     {
//       title: 'Basic',
//       price: 25,
//       currency: '$',
//       frequency: 'one-time',
//       features: ['Logo files in PNG format'],
//       icon: 'basic-icon',
//     },
//     {
//       title: 'Designer',
//       price: 65,
//       currency: '$',
//       frequency: 'one-time',
//       features: [
//         'Logo source files',
//         'Brand style guide',
//         'Business card designs',
//         'Facebook cover',
//         'Profile & app icons',
//         'Letterhead designs',
//       ],
//       icon: 'designer-icon',
//       sampleLink: '#',
//     },
//     {
//       title: 'Enterprise',
//       price: 175,
//       currency: '$',
//       frequency: 'one-time',
//       features: [
//         'Everything in the designer package',
//         'Up to 10 fully original concepts created by our design team',
//       ],
//       icon: 'enterprise-icon',
//     },
//   ];

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-8">Choose the right package for your brand</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {plans.map((plan, index) => (
//             <div key={index} className="border rounded-lg shadow-lg bg-white p-6">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <div className={`h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center`}>
//                     <span className="text-lg font-bold">{plan.icon}</span>
//                   </div>
//                   <h3 className="ml-4 text-xl font-semibold">{plan.title}</h3>
//                 </div>
//                 <div>
//                   <p className="text-3xl font-bold">
//                     {plan.currency}{plan.price}
//                   </p>
//                   <p className="text-sm text-gray-500">{plan.frequency}</p>
//                 </div>
//               </div>
//               <ul className="mb-6">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="text-gray-700 mb-2">
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//               {plan.sampleLink && (
//                 <a
//                   href={plan.sampleLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block text-center text-blue-600 font-semibold"
//                 >
//                   See sample assets
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;

// import React from 'react';
// import { motion } from 'framer-motion';

// const Pricing = () => {
//   const plans = [
//     {
//       title: 'Basic',
//       price: 25,
//       currency: '$',
//       frequency: 'one-time',
//       features: ['Logo files in PNG format'],
//       icon: '📦',
//       color: 'green',
//     },
//     {
//       title: 'Designer',
//       price: 65,
//       currency: '$',
//       frequency: 'one-time',
//       features: [
//         'Logo source files',
//         'Brand style guide',
//         'Business card designs',
//         'Facebook cover',
//         'Profile & app icons',
//         'Letterhead designs',
//       ],
//       icon: '🎨',
//       color: 'blue',
//       sampleLink: '#',
//     },
//     {
//       title: 'Enterprise',
//       price: 175,
//       currency: '$',
//       frequency: 'one-time',
//       features: [
//         'Everything in the designer package',
//         'Up to 10 fully original concepts created by our design team',
//       ],
//       icon: '🏢',
//       color: 'pink',
//     },
//   ];

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-center mb-8"
//         >
//           Choose the right package for your brand
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="border rounded-lg shadow-lg bg-white p-6 transition-all duration-300 hover:shadow-xl"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <div className={`h-12 w-12 rounded-full bg-${plan.color}-100 flex items-center justify-center`}>
//                     <span className="text-2xl">{plan.icon}</span>
//                   </div>
//                   <h3 className="ml-4 text-xl font-semibold">{plan.title}</h3>
//                 </div>
//                 <div>
//                   <p className="text-3xl font-bold">
//                     {plan.currency}{plan.price}
//                   </p>
//                   <p className="text-sm text-gray-500">{plan.frequency}</p>
//                 </div>
//               </div>
//               <ul className="mb-6">
//                 {plan.features.map((feature, i) => (
//                   <motion.li
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3, delay: i * 0.1 }}
//                     className="text-gray-700 mb-2 flex items-center"
//                   >
//                     <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                     {feature}
//                   </motion.li>
//                 ))}
//               </ul>
//               {plan.sampleLink && (
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={plan.sampleLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block text-center text-blue-600 font-semibold hover:underline"
//                 >
//                   See sample assets
//                 </motion.a>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;

// Pricing.jsx
import React from 'react';

const PricingCard = ({ title, price, features, icon, color, sampleLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center`}>
            <span className="text-white text-2xl">{icon}</span>
          </div>
          <h3 className="ml-3 text-xl font-semibold">{title}</h3>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">${price}</p>
          <p className="text-sm text-gray-500">one-time</p>
        </div>
      </div>
      <ul className="flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      {sampleLink && (
        <a href={sampleLink} className="text-blue-500 hover:underline mt-4 block text-center">
          See sample assets
        </a>
      )}
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: 'Basic',
      price: 25,
      features: ['Logo files in PNG format'],
      icon: '◻️',
      color: 'bg-green-400',
    },
    {
      title: 'Designer',
      price: 65,
      features: [
        'Logo source files',
        'Brand style guide',
        'Business card designs',
        'Facebook cover',
        'Profile & app icons',
        'Letterhead designs',
      ],
      icon: '◻️',
      color: 'bg-blue-400',
      sampleLink: '#',
    },
    {
      title: 'Enterprise',
      price: 175,
      features: [
        'Everything in the designer package',
        'Up to 10 fully original concepts created by our design team',
      ],
      icon: '◻️',
      color: 'bg-pink-400',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Choose the right package
          <br />
          <span className="text-blue-400">for your brand</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pricing;