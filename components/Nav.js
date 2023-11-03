import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import React from "react";
import Link from "next/link";
import { Avatar } from "antd";
const Nav = () => {
  return (
    <nav className=" bg-amber-400 flex text-white font-serif md:text-xl sm:text-lg items-center justify-around">
      <Link href="/cars" className="p-2 gap-2 flex justify-center items-center">
        <Avatar src="../car.jpeg" className="mix-blend-multiply" size={45} />
        Cars
      </Link>

      <Link href="/login" className="p-2">
        Login
      </Link>

      <Link href="/my-cars" className="p-2">
        My Cars
      </Link>
    </nav>
  );
};
export default Nav;
