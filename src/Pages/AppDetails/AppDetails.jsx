import React, { useState } from 'react';

import useApps from '../../Hooks/useApps';
import { Navigate, useNavigate, useParams } from 'react-router';
import  reviewIcon from '../../assets/icon-review.png'
import  ratingIcon from '../../assets/icon-ratings.png'
import downloadIcon from '../../assets/icon-downloads.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { toast, ToastContainer } from 'react-toastify';
const AppDetails = () => {

  const Navigate =useNavigate()

    const { id } = useParams();
    const {apps}=useApps()
    const app = apps.find((a) => a.id === Number(id));
    const {  image, companyName, description, downloads,ratingAvg,size ,title,reviews,ratings} =app || {};

     const [isDisabled, setISDisabled] = useState(() => {
    const installedApps = JSON.parse(localStorage.getItem('installApps')) || [];
    return installedApps.some(a => a.id === Number(id));
  });
    

  // add local sorage and disable button when click 
 const handelClick=()=>{
  setISDisabled(true)
  toast.success(<strong>{title} Installed Succesfully</strong>)

   const existingList = JSON.parse(localStorage.getItem('installApps'))
   console.log(existingList)
   let updatedList = []
   if(existingList){
    const isDuplicate = existingList.some(a=>a.id===app.id)
    if(isDuplicate ) return alert('this app already installed')
    updatedList=[...existingList,app]
   }else{
    updatedList.push(app)
   }
  localStorage.setItem('installApps', JSON.stringify(updatedList))
 }
   

   

  return (
    <div className='bg-base-200'>
      {/* details card  */}
      <div className=" md:flex justify-start items-start md:p-8 gap-30 ">
      <figure className="  bg-gray-200  rounded-lg  ">
        <img className="md:h-[300px] md:w-[400px]  " src={image} alt={title} />
      </figure>
       <div className=" md:p-0 p-2 ">
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
        isDisabled ? "bg-violet-600 cursor-not-allowed" : "bg-[#00D390] hover:bg-white hover:text-[#00D390] "
      }`}>{isDisabled? 'Installed' : `Install Now (${size})`} </button>
          <button onClick={()=>Navigate(-1)} className=' px-4 py-2 rounded font-bold text-white  bg-violet-600  hover:text-violet-600 hover:bg-white  hover:border-2 hover:border-violet-600'>Go Back</button>
        </div> 
      </div>
    </div>

      <hr className='mt-6 text-gray-300' />

  {/* BarChart */}
     <div>
    <div className=" p-5 rounded-2xl shadow mt-6">
      <h2 className="text-lg font-semibold mb-3">Ratings</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={ratings} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" reversed={true} />
          <Tooltip/>
          <Legend/>
          <Bar dataKey="count" fill="#632EE3" barSize={20}  />
        </BarChart>
      </ResponsiveContainer>
    </div>

     </div>

      {/* description  */}
     <div className='mt-6 p-6'>     
      <h3 className='text-2xl font-bold '>Discription</h3>
      <h5 className='md:text-base text-sm text-gray-500 mt-3'>{description}</h5>
     </div>
    <ToastContainer />
    </div>
  )
}

export default AppDetails;