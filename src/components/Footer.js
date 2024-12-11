

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-4 items-center">
//       <div className="container mx-auto flex flex-col md:flex-row">
//         {/* Navigation Links */}
//         <div className="flex space-x-4 items-center">
//           <a href="/" className="hover:text-blue-400">Home</a>
//           <a href="/dashboard" className="hover:text-blue-400">Dashboard</a>
//           <a href="/login" className="hover:text-blue-400">Login</a>
//         </div>

//         {/* Copyright Information */}
//         <div className="mt-2 md:mt-0">
//           <p className="text-sm text-gray-400">&copy; 2024 Fitness Tracker. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
export default function Footer (){
  return(
    <footer className="footer-color text-white py-3 text-center font-hero-font font-medium">
      <div className="space-x-4">
      <a href="/" className="hover:text-red-500">Home</a>
      <a href="/" className="hover:text-red-500">Dashboard</a> 
      <a href="/" className="hover:text-red-500">Login</a>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500">&copy; 2024 Fitness Tracker.All right reserved.</p>
      </div>
    </footer>
  )
}





