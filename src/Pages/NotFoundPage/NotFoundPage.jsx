import React from 'react';
import NotFoundImage from '../../assets/App-Error.png'
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div>
          
           
        <div className='bg-base-200'>
            <div className='flex flex-col justify-center items-center md:p-30 p-5'>
                <img className='md:w-[300px] w-[150px]' src={NotFoundImage} alt="" />
            <h1 className='md:text-4xl text-2xl font-bold mt-5'>Oops, Apps not found!</h1>
            <p className='md:text-lg text-base text-gray-500 font-medium mt-5'>The App you are requesting is not found on our system.  please try another apps</p>
           <Link className="btn bg-gradient-to-r px-10 from-violet-600 to-fuchsia-500 text-base text-white mt-5" to='/apps'>Go Back</Link>
            </div>
        </div>
      
        </div>
    );
};

export default ErrorPage;