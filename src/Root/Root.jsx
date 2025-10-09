import React from 'react';
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';
const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <div className=" max-w-screen-2xl mx-auto w-full  flex-1 bg-base-200 ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    );
};

export default Root;