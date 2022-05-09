import React from "react";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from "react-icons/hi";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const UpperHeader = () => {
  return (
    <div className="flex flex-row bg-slate-700 p-7 text-white w-1/10 pl-32">
      <section className="w-1/4 flex flex-row">
        <HiOutlineMail className="mt-1" />
        <p className="ml-2">info@wishlistnepal.com</p>
      </section>
      <section className="w-1/4 flex flex-row">
        <HiOutlineLocationMarker className="mt-1" />
        <p className="ml-2"> Tilganga, Kathmandu, Nepal</p>
      </section>
      <section className="w-1/4 flex flex-row">
        <HiOutlinePhone className="mt-1" />
        <p className="ml-2">+9771-4113808</p>
      </section>
      <section className="flex flex-row w-1/4 flex flex-row mt-1">
        <FaFacebookF className="cursor-pointer" />
        <FaTwitter className="ml-2 cursor-pointer" />
        <FaInstagram className="ml-2 cursor-pointer" />
      </section>
    </div>
  );
};

export default UpperHeader;
