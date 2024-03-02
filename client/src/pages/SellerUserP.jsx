import React from "react";
import { FaUserCircle } from "react-icons/fa";

function SellerUserP() {
  return (
    <div className="bg-[#071A2D] pt-10 px-4 md:px-8">
      <div className="flex md:grid items-center justify-between">
        <a href="#">
          <button className="bg-[#00B2FF] hover:bg-[#003F59] text-black font-semibold px-4 py-1 md:px-12 md:py-2 md:ml-[45rem] md:mb-4 md:mr-4">
            Seller
          </button>
        </a>

        <div className="text-white font-bold md:pl-4">
          <FaUserCircle size={42} className="pb-2 md:pb-0 md:mr-2" />
          <div>
            <h4 className="text-xl md:text-2xl">Name</h4>
            <p className="text-sm md:text-base">
              About- <span className="text-blue-300">Input</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8">
        <div className="bg-[#0D2F4A] p-4 rounded-md">
          <h4 className="text-white text-xl">Static Page project</h4>
          <button className="bg-[#00B2FF] hover:bg-[#003F59] text-black font-semibold px-4 py-1 mt-2 md:mt-4 md:px-6 md:py-2">
            Payment-Done
          </button>
          <p className="text-white mt-2 md:text-xl">Status-Done</p>
          <button className="bg-blue-400 text-black px-4 py-1 mt-2 md:mt-8 md:px-6 md:py-2">
            Smart Contract
          </button>
        </div>

        <div className="bg-[#0D2F4A] p-4 rounded-md">
          <select className="w-full bg-black text-white p-2 md:text-lg">
            <option className="text-lg">Details</option>
            <option>Project done-25%</option>
            <option>Payment done-Rs1250</option>
            <option>Amount left-Rs3750</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SellerUserP;
