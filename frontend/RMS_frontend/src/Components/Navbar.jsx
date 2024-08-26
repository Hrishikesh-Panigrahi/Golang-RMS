import React from "react";

const Navbar = () => {

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 lg:px-8">
        <div className="logo">
          <h1 className="text-white text-4xl font-serif tracking-widest">
            <a href="#" className="hover:text-white">
              Rishi's Restaurant
            </a>
          </h1>
        </div>

        <nav class="">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-white flex justify-between">
              <div class="flex items-center space-x-1">
                <a href="" class="py-5 px-3 text-white hover:text-black">
                  About
                </a>
                <a href="" class="py-5 px-3 text-white hover:text-black">
                  Menu
                </a>
                <a href="" class="py-5 px-3 text-white hover:text-black">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        <a
          href=""
          className="hidden lg:block bg-yellow-500 text-gray-900 rounded-full py-2 px-6 ml-6 hover:bg-yellow-600 transition-colors duration-300"
        >
          Admin Login
        </a>

        <i className="bi bi-list text-white text-3xl lg:hidden cursor-pointer"></i>
      </div>
    </header>
  );
};

export default Navbar;
