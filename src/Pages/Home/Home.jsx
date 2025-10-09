import React from 'react';
import Banner from '../../Component/Banner/Banner';
import { Link,  } from 'react-router';
import AppsCard from '../AppsCard/AppsCard';
import useApps from '../../Hooks/useApps';
import Loading from '../Loading/Loading';


const Home = () => {

  const {apps,loading}=useApps()
  const sliceApp=apps.slice(0,8)
  

    return (
      <div>
        {

            loading ? <Loading/> :
          <div className='bg-base-200 '>
            
          <Banner></Banner>
          
          <h1 className='text-3xl font-bold  text-center'>Trending Apps</h1>
          <p className='text-base text-center font-medium text-gray-500 mt-3 mb-8'>Explore All Trending Apps on the Market developed by us</p>
          
          
          
           <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 p-5'>
             {
              
                sliceApp.map(app=><AppsCard key={app.id} app={app}></AppsCard> )
            
            }
           </div>
          
           
           
            <div className='flex justify-center items-center  p-10 '>
              <Link to='/apps' className="btn bg-gradient-to-r px-10 from-violet-600 to-fuchsia-500 text-base text-white" >Show All</Link>
            </div>
           
          
        </div>
        }
        </div>
    );
};

export default Home;