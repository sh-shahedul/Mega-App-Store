import React from 'react';
import { Link } from 'react-router';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import playstore from '../../assets/Group.png'
import applestore from '../../assets/Group1.png'
import hero from '../../assets/hero.png'
const Banner = () => {
    return (
        <div className='  bg-base-200 text-center md:py-10 py-7'>
           <h1 className='md:text-5xl text-3xl font-bold'> We Build <br /> <span className='text-violet-600'>Productive</span> Apps</h1> 
            <p className='font-semibold md:text-base text-[16px] max-w-[780px] mx-auto mt-4 text-gray-500 p-1'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.   Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className=' flex gap-2 justify-center mt-5'>
                <Link className='btn text-lg font-semibold shadow-lg border border-gray-300  ' to='https://play.google.com/store/games?hl=en'> <img className='w-6 h-6' src={playstore} alt="" />Google Play</Link>
                <Link className='btn  text-lg font-semibold shadow-lg border  border-gray-300 ' to='https://www.apple.com/app-store/'> <img  className='w-6 h-6' src={applestore} alt="" />App Store</Link>
            </div>
            <div className='mt-10 flex justify-center'>
                <img className='px-2' src={hero} alt="" />
            </div>

        <div className='bg-gradient-to-r from-violet-600 to-fuchsia-500 md:p-10 p-3  '>
            <h1 className='md:text-3xl text-lg font-semibold text-white'>Trusted by Millions, Built for You</h1>
            <div className='flex justify-center md:gap-20 items-center md:mt-7 mt-3'>
                <div>
                   <h5 className='text-white font-medium text-[10px] md:text-base '>Total Downloads</h5> 
                   <h1 className='text-white font-bold md:text-4xl text-lg '>29.6M</h1>
                   <h5 className='text-white font-medium text-[10px] md:text-base'>21% more than last month</h5> 
                </div>
                <div>
                   <h5 className='text-white font-medium text-[10px] md:text-base '>Total Reviews</h5> 
                   <h1  className='text-white font-bold md:text-4xl text-lg '>906K</h1>
                   <h5 className='text-white font-medium text-[10px] md:text-base'>46% more than last month</h5> 
                </div>
                <div>
                   <h5 className='text-white font-medium  text-[10px] md:text-base'>Active Apps</h5> 
                   <h1  className='text-white font-bold md:text-4xl text-lg '>132+</h1>
                   <h5 className='text-white font-medium text-[10px] md:text-base'>31 more will Launch</h5> 
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;