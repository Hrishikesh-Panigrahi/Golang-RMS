import React from "react";
import Navbar from "../../Components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-screen bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/022/576/372/small_2x/image-of-wooden-table-in-front-of-abstract-blurred-background-of-resturant-lights-wood-table-top-on-blur-of-lighting-in-night-cafe-restaurant-background-selective-focus-generative-ai-photo.jpg")`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Rishi's Restaurant Management System
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl">
            Simplify your restaurant operations with our all-in-one management
            system designed specifically for admins. From reservations to
            inventory, we’ve got you covered.
          </p>
          <div className="mt-8 flex space-x-4">
            <a
              href="#features"
              className="px-6 py-3 text-lg font-semibold bg-yellow-500 text-gray-900 rounded-full hover:bg-yellow-600 transition-colors"
            >
              Learn More
            </a>
            <a
              href="#demo"
              className="px-6 py-3 text-lg font-semibold bg-transparent border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors"
            >
              Login
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
