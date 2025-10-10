import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
       <footer className=" bg-black text-white  ">
  <div className=' footer md:flex justify-between max-w-screen-2xl mx-auto md:px-15 px-6 py-10'>
    <div>
      <h1 className='footer-title'>Explore App</h1>
      <p className='max-w-[400px]'>  Mega App Store is a modern platform that lets  users explore, discover, and download a wide variety of applications with ease. From productivity tools to entertainment apps,  Mega App Store offers a smooth experience, fast downloads,and detailed app information — all in
       one convenient,user-friendly place.</p>
    </div>
    <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
     <Link to='https://www.facebook.com/shahedulhoquee/'><FaFacebook size={25}/></Link>    
     <Link to='https://www.linkedin.com/in/sh-shahedul/'><FaLinkedin size={25}/></Link>    
     <Link to='https://github.com/sh-shahedul'><FaGithub size={25}/></Link>    
    

    </div>
  </nav>
  </div>
 <div className='text-center max-w-screen-2xl mx-auto p-2'>
   <hr />
   <p className='mt-2' > Copyright © {new Date().getFullYear()} - All right reserved by Mega App Store</p>
 </div>
</footer>
    );
};

export default Footer;