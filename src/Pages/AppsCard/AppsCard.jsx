import React from 'react';
import { MdDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const AppsCard = ({app}) => {
    return (
       <Link to={`/apps/${app.id}`} className="card bg-base-100  shadow-lg hover:scale-103 transition ease-in-out p-3 mb-3">
  <figure className=' h-75 overflow-hidden  '>
    <img className='w-full object-cover '
      src={app.image}
      alt={app.title} />
  </figure>
  <div className="">
    <h2 className="text-xl font-medium text-center mt-5">{app.title} </h2>
    
    <div className=" flex justify-between items-center mt-5">
      <div className="badge bg-green-50 text-green-600 font-semibold p-3"> <MdDownload/>{app.downloads}</div>
      <div className="badge bg-yellow-50 text-yellow-600 font-semibold p-3"> <FaStar />{app.ratingAvg}</div>
    </div>
  </div>
</Link>
    );
};

export default AppsCard;