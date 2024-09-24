import React from 'react';
import one from "../assets/img.jpg";
import { FaFacebookF, FaYoutube, FaGoogle, FaGithub } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="flex max-w-[1140px] mx-auto py-20">
      {/* Image Section */}
      <div className="w-1/3">
        <img className="w-full h-auto object-cover" src={one} alt="About me" />
      </div>

      {/* Text Section */}
      <div className="w-2/3 px-8">
        <h2 className="text-[40px] font-bold">About Me.</h2>
        <h3 className="text-[20px] py-[15px]">UI/UX Designer & Web Developer</h3>
        <p className="text-[17px] py-[10px]">
        I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
        </p>
        <p className="text-[17px] py-[10px]">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>

        {/* Social Icons */}
        <div className="flex lg:justify-start gap-4 justify-center text-black py-[10px]">
         <a href=""> <FaFacebookF /></a>
         <a href="https://www.youtube.com/"> <FaYoutube /></a>
          <a href="https://myaccount.google.com/?hl=en_GB&utm_source=OGB&utm_medium=act&gar=WzBd"><FaGoogle /></a>
          <a href=""><FaGithub /></a>
          <a href=""><FaSquareWhatsapp /></a>
        </div>

        {/* Download Button */}
        <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-blue-700 transition">Download CV</button>
      </div>
    </div>
  );
}

export default Banner;