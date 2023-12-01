import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between w-full h-24 mx-auto  px-4 pt-4 shadow-md bg-white">
      <h1 className="text-3xl fond-bold text-[black]">Hashi Dashboard</h1>
      <ul className="flex">
        <li key={"tx"} className="p-4">
          <a href={"/"}>Transactions</a>
        </li>
        <li key={"status"} className="p-4">
          <a href={"/status"}>Adapter Status</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
