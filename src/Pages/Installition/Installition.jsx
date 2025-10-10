import React, { useEffect, useState } from "react";
import { MdDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
// import { toast, ToastContainer } from 'react-toastify';
import useApps from "../../Hooks/useApps";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import { Link } from "react-router";

const Installition = () => {
  const { loading } = useApps();

  const [appList, setAppList] = useState([]);

  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installApps"));
    if (savedList) {
      setAppList(savedList);
    }
  }, []);

  // sort  App
  const sortApps = (() => {
    if (sortOrder === "asc") {
      return [...appList].sort(
        (a, b) => parseFloat(a.downloads) - parseFloat(b.downloads)
      );
    } else if (sortOrder === "desc") {
      return [...appList].sort(
        (a, b) => parseFloat(b.downloads) - parseFloat(a.downloads)
      );
    } else {
      return appList;
    }
  })();

  // remove apps
  const handelRemove = (id) => {
    // toast(<p>{apps.title}UnInstalled from your Device</p>);
    // toast.success(`✅ ${apps.title} installed successfully!`);
    const app = appList.find((a) => a.id === id);
    toast(`❌ ${app.title} has been uninstalled from your device 💻🗑️`);
    const existingList = JSON.parse(localStorage.getItem("installApps"));

    let updatetdList = existingList.filter((a) => a.id !== id);
    setAppList(updatetdList);

    localStorage.setItem("installApps", JSON.stringify(updatetdList));
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-base-200 px-5 ">
          <div className="p-5">
            <h1 className="md:text-4xl text-2xl font-bold text-center">
              Your Installed Apps
            </h1>
            <p className="md:text-xl text-base text-gray-500 text-center font-medium mt-2">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          {/* sort apps length  */}
          <div className=" md:flex justify-between items-center p-5">
            <div className=" md:flex justify-between items-center py-5 ">
              <span className="text-2xl font-bold text-violet-600">
                Inatall App ({sortApps.length})
              </span>
            </div>
            {/* sort  */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select input flex items-center gap-2  rounded-md px-2 
                      focus-within:outline-none focus-within:ring-0 text-violet-600 font-semibold focus-within:shadow-none border-2 border-violet-600"
            >
              <option className="text-violet-600 font-semibold" value="none">
                Sort By Download
              </option>
              <option className="text-violet-600 font-semibold" value="asc">
                Low -&gt; High
              </option>
              <option className="text-violet-600 font-semibold" value="desc">
                HIgh -&gt; Low
              </option>
            </select>
          </div>

          {/* install apps  */}
          {appList.length === 0 ? (
            <div className="  flex justify-center items-center md:p-30 p-5 mb-20 flex-col gap-y-7">
              <p className="text-3xl text-violet-600 font-bold  ">
                No Data Avaiable
              </p>
              <Link
                to="/apps"
                className=" bg-gradient-to-r py-2 px-3 rounded-lg from-violet-600 to-fuchsia-500 text-base text-white font-bold"
              >
                Show All Apps
              </Link>
            </div>
          ) : (
            sortApps.map((a) => (
              <div
                key={a.id}
                className="flex bg-white justify-between items-center shadow-sm md:gap-10 md:px-4 my-5 pr-2 hover:scale-102 transition ease-in-out"
              >
                <figure className="  rounded-lg  p-3 ">
                  <img
                    className="md:h-[100px] w-[70px] md:w-[130px]"
                    src={a.image}
                    alt={a.companyName}
                  />
                </figure>
                <div className="flex flex-col flex-1 md:ml-5 ">
                  <h2 className=" md:text-xl text-sm font-bold">{a.title}</h2>
                  <div className="flex gap-3 mt-2 ">
                    <p className="md:text-base text-sm font font-semibold flex items-center text-green-600 gap-0.5">
                      <MdDownload size={15} />
                      {a.downloads}
                    </p>
                    <p className="md:text-base text-sm font font-semibold flex items-center text-yellow-600 gap-0.5">
                      {" "}
                      <FaStar size={13} />
                      {a.ratingAvg}
                    </p>
                    <p className="md:text-base text-sm text-gray-600 font font-semibold  ">
                      {a.size}MB
                    </p>
                  </div>
                </div>

                <div className="  flex justify-center items-center md:gap-5 gap-2">
                  <button
                    onClick={() => handelRemove(a.id)}
                    className=" bg-violet-600 text-white p-1 md:p-2 text-sm md:text-base md:font-medium rounded-sm hover:bg-red-600 "
                  >
                    Unstall
                  </button>
                </div>
              </div>
            ))
          )}

          {/* <ToastContainer position='center' /> */}
        </div>
      )}
    </div>
  );
};

export default Installition;
