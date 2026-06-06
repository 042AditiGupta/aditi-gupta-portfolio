import React, { useRef } from 'react';
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

function Nav() {
  let menuRef = useRef();

  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from("nav h1", {
      y: 100,
      duration: 1,
      opacity: 0
    });
    t1.from("nav ul li", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1
    });
  });

  const toggleMenu = () => {
    menuRef.current.classList.toggle("activemobile");
  };

  const getLinkClass = (isActive) =>
    isActive
      ? 'text-blue-500 underline font-semibold cursor-pointer px-2'
      : 'text-white cursor-pointer px-2 text-blue-400 hover:underline';

  return (
    <nav className="md:fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white flex justify-between items-center px-6 py-4 z-50">
      <h1 className="text-xl font-semibold bg-gradient-to-r from-cyan-300 to-indigo-600 bg-clip-text text-transparent">PORTFOLIO</h1>

      <div>
        <ul ref={menuRef} className="flex-col hidden text-xl absolute top-16 left-0 w-full bg-opacity-90 md:flex md:flex-row md:static md:w-auto md:bg-transparent md:space-x-6 space-y-4 md:space-y-0 px-6 py-4 md:px-0 md:py-0 transition-all duration-300 ease-in-out items-center">
          <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}>
            <li className='hover:underline hover:text-blue-400 hover:cursor-pointer'>Home</li>
          </Link>
          <Link to="About" activeClass='active' spy={true} smooth={true} duration={500}>
            <li className='hover:underline hover:text-blue-400 hover:cursor-pointer'>About</li>
          </Link>
          <Link to="Projects" activeClass='active' spy={true} smooth={true} duration={500}>
            <li className='hover:underline hover:text-blue-400 hover:cursor-pointer'>Projects</li>
          </Link>
          <Link to="Contact" activeClass='active' spy={true} smooth={true} duration={500}>
            <li className='hover:underline hover:text-blue-400 hover:cursor-pointer'>Contact</li>
          </Link>
        </ul>
      </div>

      <div className="hamburger inline-block p-4 cursor-pointer md:hidden" onClick={toggleMenu}>
        <div className="h-0.5 w-6 my-1 bg-white"></div>
        <div className="h-0.5 w-6 my-1 bg-white"></div>
        <div className="h-0.5 w-6 my-1 bg-white"></div>
      </div>
    </nav>
  );
}

export default Nav;
