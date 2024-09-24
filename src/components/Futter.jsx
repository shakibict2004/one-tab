import React from 'react';
import { FaLaptop, FaRocket, FaPencilAlt } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { IoFootballSharp } from "react-icons/io5";

const Futter = () => {
  return (
    <div className="max-w-container mx-auto py-16 bg-gray-100 text-center">
      <h2 className="text-lg font-medium text-gray-600">Services</h2>
      <h3 className="text-4xl font-semibold text-gray-800 mt-2 mb-10">What I Can Do</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-10">
        <div className="flex flex-col items-center">
          <FaLaptop className="text-5xl text-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Web Design</h2>
          <p className="text-base text-gray-600 px-4">
            Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <MdSettingsSuggest className="text-5xl  text-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
          <p className="text-base text-gray-600 px-4">
            Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <CiMobile3 className="text-5xl text-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Responsive Design</h2>
          <p className="text-base text-gray-600 px-4">
            Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaRocket className="text-5xl text-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Branding Identity</h2>
          <p className="text-base text-gray-600 px-4">
            Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaPencilAlt className="text-5xl text-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Graphic Design</h2>
          <p className="text-base text-gray-600 px-4">
            Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <IoFootballSharp className="text-5xl text-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Creative Strategy</h2>
          <p className="text-base text-gray-600 px-4">
            Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Futter;