import React, { useState } from 'react';

import useApps from '../../Hooks/useApps';
import { useParams } from 'react-router';
import  reviewIcon from '../../assets/icon-review.png'
import  ratingIcon from '../../assets/icon-ratings.png'
import downloadIcon from '../../assets/icon-downloads.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { toast, ToastContainer } from 'react-toastify';
const AppDetails = () => {

  const [isDisabled,setISDisabled]=useState(false)



    const { id } = useParams();
    const {apps}=useApps()
    const app = apps.find((a) => a.id === Number(id));
    const {  image, companyName, description, downloads,ratingAvg,size ,title,reviews,ratings} =app || {};

 const handelClick=()=>{
  setISDisabled(!isDisabled)
  toast.success(
    <strong>{title} Installed Succesfully</strong>
  
  )


  
 }
   

   

  return (
    <div className='bg-base-200'>
      <div className=" md:flex justify-between items-center  gap-30">
      <figure className="  bg-gray-200  rounded-lg  ">
        <img className="md:h-[350px] md:w-[450px]  " src={image} alt={title} />
      </figure>
       <div className="card-body ">
          <h2 className=" text-3xl font-bold ">{title}</h2>
           <h2 className='text-lg'>beceloped by <span className='font-bold text-violet-600'>{companyName}</span></h2>
           <hr className='text-gray-300' />

        <div className="flex justify-start items-center md:gap-20 gap-10 mt-5">
           <div>
             <img className='h-8' src={downloadIcon} alt="" />
            <h5 className='font-base text-gray-500'>Downloads</h5>
            <h1 className='text-2xl font-bold'>{downloads}</h1>
           </div>        
           <div>
             <img className='h-8' src={ratingIcon} alt="" />
            <h5 className='font-base text-gray-500'>Average Ratings</h5>
            <h1 className='text-2xl font-bold'>{ratingAvg}</h1>
           </div>
            <div>
            <img className='h-8' src={reviewIcon} alt="" />
            <h5 className='font-base text-gray-500'>Total Reviews</h5>
            <h1 className='text-2xl font-bold'>{reviews}</h1>
           </div>
        </div>

         <div className="card-actions justify-start mt-4">
          <button disabled={isDisabled}  onClick={handelClick}  className={`px-4 py-2 rounded font-bold text-white ${
        isDisabled ? "bg-red-600 cursor-not-allowed" : "bg-[#00D390] hover:bg-white hover:text-[#00D390] "
      }`}>{isDisabled? 'Installed' : "Install Now "  }({size}MB) </button>
         
        </div> 
      </div>
    </div>
      <hr className='mt-6 text-gray-300' />





     <div>

  <div className=" p-5 rounded-2xl shadow mt-6">
      <h2 className="text-lg font-semibold mb-3">Ratings</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={ratings}
          layout="vertical"
        
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" reversed={true} />
          <Tooltip/>
          <Bar dataKey="count" fill="#ff9500" barSize={20}  />
        </BarChart>
      </ResponsiveContainer>
    </div>


      
     </div>























    <div className='mt-6 p-6'>
      <h3 className='text-2xl font-bold '>Discription</h3>
      <h5 className='text-xl text-gray-500 mt-3'>{description}</h5>
    </div>
    <ToastContainer />
    </div>
  )
}

export default AppDetails;