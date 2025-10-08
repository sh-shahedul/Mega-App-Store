import React from 'react';
import errorImage from '../../assets/error-404.png'
import { Link } from 'react-router';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
        <div className='bg-base-200'>
            <div className='flex flex-col justify-center items-center md:p-30 p-5'>
                <img className='md:w-[300px] w-[150px]' src={errorImage} alt="" />
            <h1 className='md:text-4xl text-2xl font-bold mt-5'>Oops, page not found!</h1>
            <p className='md:text-lg text-base text-gray-500 font-medium mt-5'>The page you are looking for is not available.</p>
           <Link className="btn bg-gradient-to-r px-10 from-violet-600 to-fuchsia-500 text-base text-white mt-5" to='/apps'>Go Back</Link>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ErrorPage;