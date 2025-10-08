import React, { useState } from "react";
import useApps from "../../Hooks/useApps";
import AppsCard from "../AppsCard/AppsCard";
import { Link } from "react-router";

const Apps = () => {
    const {apps}=useApps()
    const [serch,setSerch]=useState('')


    const term = serch.trim().toLocaleLowerCase()
    const serchProduct = term ? apps.filter(a=>a.title.toLocaleLowerCase().includes(term)):apps

    const noResults = term && serchProduct.length === 0;
  return (
    <div className="bg-base-200">
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold ">Our All Applications</h1>
        <p className="text-xl text-gray-500 font-semibold mt-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div>
        <div className=" md:flex justify-between items-center py-5 ">
          <h1 className="text-3xl font-semibold text-violet-600">
            All App<span className="text-sm text-gray-500">({serchProduct.length}) App found</span>
          </h1>

          <label
            className="input flex items-center gap-2  rounded-md px-2 
                      focus-within:outline-none focus-within:ring-0 focus-within:shadow-none border-2 border-violet-600"
          >
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              className="text-violet-600 font-semibold flex-1 focus:outline-none focus:ring-0 focus:shadow-none "
                value={serch}
                onChange={(e) => setSerch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>

     <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
       noResults ? 
         <div className=" text-center grid col-span-4 p-20">
            <p className=" text-violet-500 text-5xl font-bold"> No Apps Found</p>
         </div>
          : serchProduct.map((app)=><AppsCard key={app.id} app={app}></AppsCard>)
         }
     </div>

    </div>
  );
};

export default Apps;
