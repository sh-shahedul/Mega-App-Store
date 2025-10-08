import React, { useEffect, useState } from 'react';
import { MdDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import useApps from '../../Hooks/useApps';

const Installition = () => {
    const {apps}=useApps()
    const [appList,setAppList]=useState([])
    const [sortOrder,setSortOrder]=useState('none')
    useEffect(()=>{
        const savedList = JSON.parse(localStorage.getItem('installApps')) 
        if(savedList){
            setAppList(savedList)
        }
    },[])


      
  
    // sort  App
    const sortApps = (
        ()=>{
        if(sortOrder==='asc'){
            return [...appList].sort((a,b)=>a.size-b.size)
        }else if(sortOrder==='desc'){
            return[...appList].sort((a,b)=>b.size-a.size)
        }else{
            return appList
        }
    }
    )()

    // remove apps 
    const handelRemove =(id)=>{
         toast.success(<strong>{apps.title} Un-Installed from your Device</strong>)
        const existingList = JSON.parse(localStorage.getItem('installApps'))

       let updatetdList = existingList.filter(a=>a.id!==id)
         setAppList(updatetdList)


        localStorage.setItem('installApps', JSON.stringify(updatetdList))
    }


    return (
         <div className='bg-base-200 '>
            <div className='p-10'>
                <h1 className='text-4xl font-bold text-center'>Your Installed Apps</h1>
                <p className='text-xl text-gray-500 text-center font-medium'>Explore All Trending Apps on the Market developed by us</p>

            </div>
            {/* sort apps length  */}
      <div className=" md:flex justify-between items-center py-5">
        <div className=" md:flex justify-between items-center py-5 ">
          
            
            <span className="text-2xl font-bold text-violet-600">
              ({sortApps.length}) Apps found
            </span>
        
        </div>
          {/* sort  */}
        <select
           value={sortOrder}
           onChange={(e) => setSortOrder(e.target.value)}
          className="select input flex items-center gap-2  rounded-md px-2 
                      focus-within:outline-none focus-within:ring-0 text-violet-600 font-semibold focus-within:shadow-none border-2 border-violet-600"
        >
          <option className="text-violet-600 font-semibold" value="none">Sort By Size</option>
          <option className="text-violet-600 font-semibold" value="asc">Low -&gt; High</option>
          <option className="text-violet-600 font-semibold" value="desc">HIgh -&gt; Low</option>
        </select>
      </div>


        
















            {/* install apps  */}
            {

     (appList.length===0) ?
          <p className="text-3xl flex justify-center items-center text-violet-600 font-bold  p-30">No Data Avaiable</p>
          :

          sortApps.map(a=>   <div key={a.id} className="flex bg-white justify-between items-center shadow-sm md:gap-10 md:px-4 my-5 pr-2">
          <figure className="  rounded-lg  p-3 ">
            <img className="md:h-[100px] w-[70px] md:w-[180px]" src={a.image} alt={a.companyName}/>
          </figure>
          <div className="flex flex-col flex-1 md:ml-5 ">
            <h2 className=" md:text-xl text-sm font-bold">{a.title}</h2>
           <div className='flex gap-3 mt-2 '>
             <p className="md:text-base text-sm font font-semibold flex items-center text-green-600 gap-0.5"><MdDownload size={15}/>{a.downloads}</p>
             <p className="md:text-base text-sm font font-semibold flex items-center text-yellow-600 gap-0.5"> <FaStar size={13}/>{a.ratingAvg}</p>
             <p className="md:text-base text-sm text-gray-600 font font-semibold  ">{a.size}MB</p>
            
            </div>
          </div>

          <div className="  flex justify-center items-center md:gap-5 gap-2">
           
            <button onClick={()=>handelRemove(a.id)} className=" bg-violet-600 text-white p-1 md:p-2 text-sm md:text-base md:font-medium rounded-sm " >
              Unstall
            </button>
          </div>
        </div>)
            }

            <ToastContainer />
        </div>
    );
};

export default Installition;