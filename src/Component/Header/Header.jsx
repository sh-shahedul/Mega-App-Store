import React from 'react';
import {  Link, NavLink } from 'react-router';
import  logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";

const Header = () => {
    return (
        <div className=" bg-base-100 shadow-sm">
  <div className='navbar max-w-screen-2xl mx-auto md:p-5 p-3'>
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className="hover:bg-violet-600   hover:text-white text-violet-600 bg-violet-200 font-bold rounded-lg border-2 border-violet-600 ">
            <NavLink className={({ isActive }) =>
          isActive ? "bg-violet-600 text-base text-white" : ""
        } to="/">Home</NavLink>
          </li>
          <li className="hover:bg-violet-600 hover:text-white text-violet-600  bg-violet-200 font-bold rounded-lg border-2 border-violet-600 my-2">
            <NavLink className={({ isActive }) =>
          isActive ? "bg-violet-600 text-base text-white" : ""
        } to="/apps">Apps</NavLink>
          </li>
          <li className="hover:bg-violet-600  hover:text-white text-violet-600 bg-violet-200 font-bold rounded-lg border-2 border-violet-600 ">
            <NavLink className={({ isActive }) =>
          isActive ? "bg-violet-600 text-base text-white " : ""
        } to="/install">Installation</NavLink>
          </li>
      </ul>
    </div>
      <Link to='/' className='flex justify-between items-center gap-2 '>
      <img className=' w-[40px] h-[40px]  md:w-[60px]  md:h-[60px]'  src={logo} alt="" />
     <p className=" text-xl md:text-2xl font-bold text-violet-600  "> MegaApp <span className='md:text-2xl text-lg text-fuchsia-500 md:text-violet-600 '>Store</span> </p>
     </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li className="hover:bg-violet-600   hover:text-white text-violet-600 text-lg font-bold rounded-lg   ">
            <NavLink className={({ isActive }) =>
          isActive ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-base  text-white" : ""
        } to="/">Home</NavLink>
          </li>
          <li className="hover:bg-violet-600 hover:text-white text-violet-600 text-lg    font-bold rounded-lg   mx-2">
            <NavLink className={({ isActive }) =>
          isActive ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-base text-white" : ""
        } to="/apps">Apps</NavLink>
          </li>
          <li className="hover:bg-violet-600  hover:text-white text-violet-600  text-lg  font-bold rounded-lg   ">
            <NavLink className={({ isActive }) =>
          isActive ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-base text-white " : ""
        } to="/install">Installation</NavLink>
          </li>
          
    </ul>
  </div>
  <div className="navbar-end">
   <Link  to='https://github.com/sh-shahedul' className=" bg-gradient-to-r from-violet-600 to-fuchsia-500 md:text-base text-sm text-white flex items-center gap-1 p-2 rounded-lg"><FaGithub /> Contribute </Link>
  </div>
  </div>
</div>
    );
};

export default Header;