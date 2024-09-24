import React from 'react';
import { BiLogoReact } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { PiTextHFourBold } from "react-icons/pi";
import { TfiCup } from "react-icons/tfi";

const Header = () => {
  return (
    <div className="pt-20 pb-16 bg-shakib bg-center bg-no-repeat bg-cover bg-fixed">
      <div className="flex max-w-container mx-auto justify-around items-center text-center text-white">
        <div className="w-1/4 flex flex-col items-center">
          <BiLogoReact className="text-5xl mb-3 text-primary" />
          <h2 className="text-3xl font-bold">220</h2>
          <h3 className="text-lg">Happy Clients</h3>
        </div>

        <div className="w-1/4  flex flex-col items-center">
          <AiOutlineLike className="text-5xl mb-3 text-primary" />
          <h2 className="text-3xl font-bold">150</h2>
          <h3 className="text-lg">Projects Completed</h3>
        </div>

        <div className="w-1/4 flex flex-col items-center">
          <PiTextHFourBold className="text-5xl mb-3 text-primary" />
          <h2 className="text-3xl font-bold">180</h2>
          <h3 className="text-lg">Articles Written</h3>
        </div>

        <div className="w-1/4 flex flex-col items-center">
          <TfiCup className="text-5xl mb-3 text-primary" />
          <h2 className="text-3xl font-bold">50</h2>
          <h3 className="text-">Awards Won</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;