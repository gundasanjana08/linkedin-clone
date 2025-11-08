import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-linkedinBlue text-white flex justify-between items-center px-6 py-3 shadow-md">
      <h1 className="text-2xl font-bold">LinkedIn Clone</h1>
      <div className="flex gap-6">
        <button className="hover:text-linkedinLightBlue">Home</button>
        <button className="hover:text-linkedinLightBlue">My Network</button>
        <button className="hover:text-linkedinLightBlue">Jobs</button>
        <button className="hover:text-linkedinLightBlue">Messaging</button>
        <button className="hover:text-linkedinLightBlue">Notifications</button>
      </div>
    </nav>
  );
};

export default Navbar;
