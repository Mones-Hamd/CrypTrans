import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import images from '../../images';
import './Navbar.css';
const NavBarItem = ({ title, classprops }) => (
  <li className={` ${classprops} text-white`}>{title}</li>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navbarData = ['Market', 'Exchange', 'Tutorials', 'Wallets'];
  return (
    <nav className="nav-container">
      <div className="md:flex-[0.5] flex-initial justify-center items-center logo  ">
        <h2 className="logo-txt"> CrypTrans</h2>
        <img src={images.logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="md:flex hidden list-none flex-row justify-between   items-center flex-initial nav-li">
        {navbarData.map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative display">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            color="white"
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-pulse ul-display"
          >
            <li className="text-xl w-full my-2 outline-close">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navbarData.map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-2 text-lg li-display"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
