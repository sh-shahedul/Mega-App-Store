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
            <div className='flex flex-col justify-center items-center p-30'>
                <img src={errorImage} alt="" />
            <h1 className='text-5xl font-bold mt-5'>Oops, page not found!</h1>
            <p className='text-lg text-gray-500 font-medium mt-5'>The page you are looking for is not available.</p>
           <Link className="btn bg-gradient-to-r px-10 from-violet-600 to-fuchsia-500 text-base text-white mt-5" to='/apps'>Go Back</Link>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ErrorPage;