 import React, { useState } from "react";
 import useApps from "../../Hooks/useApps";
 import { useNavigate, useParams } from "react-router";
 import reviewIcon from "../../assets/icon-review.png";
 import ratingIcon from "../../assets/icon-ratings.png";
 import downloadIcon from "../../assets/icon-downloads.png";
 import {BarChart,Bar,XAxis,YAxis,Tooltip,CartesianGrid,ResponsiveContainer,Legend,} from "recharts";
// import { toast, ToastContainer } from 'react-toastify';
 import NotFoundPage from "../NotFoundPage/NotFoundPage";
 import { toast } from "react-toastify";




const AppDetails = () => {
     const Navigate = useNavigate();
     const { id } = useParams();
     const { apps } = useApps();
     const [isDisabled, setISDisabled] = useState(() => {
        const installedApps = JSON.parse(localStorage.getItem("installApps")) || [];
        return installedApps.some((a) => a.id === Number(id));
        });


      if ( !apps.length) {
    return (
      <div className="text-center m-20 text-gray-500 font-semibold ">
        Loading app details...
      </div>
    );
  }
  


     const app = apps.find((a) => a.id === Number(id));

        const {image,companyName,description,downloads,ratingAvg,size,title,reviews,ratings} = app || {};

        

  if (!app) {
    return <NotFoundPage></NotFoundPage>;
  }
  

  // add local sorage and disable button when click
      const handelClick = () => {
         setISDisabled(true);
         toast(<strong>{title} Installed Succesfully</strong>);
         const existingList = JSON.parse(localStorage.getItem("installApps"));
         let updatedList = [];
         if (existingList) {
         const isDuplicate = existingList.some((a) => a.id === app.id);
         if (isDuplicate) return toast("this app already installed");
             updatedList = [...existingList, app];
             }
         else {
           updatedList.push(app);
           }
         localStorage.setItem("installApps", JSON.stringify(updatedList));
         };

  return (
    
      
        <div className="bg-base-200">
  {/* details card  */}

           <div className=" md:flex justify-start items-start md:p-8 p-4 gap-30  ">
           <figure className="  bg-gray-200  rounded-lg  ">
           <img className="md:h-[270px] md:w-[370px]" src={image} alt={title}/>
           </figure>
           <div className=" md:p-0 p-2 ">
           <h2 className=" text-3xl font-bold ">{title}</h2>
           <h2 className="text-lg mt-2">Developed by<span className="font-bold text-violet-600">{companyName}</span></h2>
           <hr className="text-gray-300 mt-5" />
           <div className="flex justify-start md:items-center items-start md:gap-20 gap-10 mt-5">
            <div>
                <img className="h-8" src={downloadIcon} alt="" />
                <h5 className="md:font-base text-sm text-gray-500 mt-2"> Downloads </h5>
                <h1 className="md:text-2xl text-xl font-bold">{downloads}</h1>
            </div>
            <div>
                <img className="h-8" src={ratingIcon} alt="" />
                <h5 className="md:font-base text-sm text-gray-500 mt-2"> Average Ratings </h5>
                <h1 className="md:text-2xl text-xl font-bold">{ratingAvg}</h1>
            </div>
            <div>
              <img className="h-8" src={reviewIcon} alt="" />
              <h5 className="md:font-base text-sm text-gray-500 mt-2"> Total Reviews </h5>
              <h1 className="md:text-2xl text-xl font-bold">{reviews}K</h1>
            </div>
            </div>
          <div className="card-actions justify-start mt-4">
            <button
              disabled={isDisabled}
              onClick={handelClick}
              className={`px-4 py-2 rounded font-bold text-white ${
                isDisabled
                  ? "bg-violet-400 cursor-not-allowed"
                  : "bg-[#00D390] hover:bg-white hover:text-[#00D390] " }`}>
                    {isDisabled ? "Installed" : `Install Now (${size}MB)`}{" "}</button>
           <button onClick={() => Navigate(-1)}className=" px-4 py-2 rounded font-bold text-white  bg-violet-600  hover:text-violet-600 hover:bg-white  hover:border-2 hover:border-violet-600">Go Back</button>
          </div>
        </div>
      </div>

      <hr className="mt-6 text-gray-300" />

      {/* BarChart */}
      <div>
        <div className=" md:p-5 rounded-2xl shadow mt-6">
          <h2 className="text-lg font-semibold mb-3 p-3">Ratings</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={ratings} layout="vertical">
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" reversed={true} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#632EE3" barSize={25} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* description  */}
      <div className="mt-6 p-6">
        <h3 className="text-2xl font-bold ">Discription</h3>
        <h5 className="md:text-base text-sm text-gray-500 mt-3">
          {description}
        </h5>
      </div>
      {/* <ToastContainer position='center' /> */}
    </div>
      
    
  );
};

export default AppDetails;
