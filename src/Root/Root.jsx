import React from 'react';
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <div className=" max-w-screen-2xl mx-auto w-full px-4 md:px-8 lg:px-12 flex-1 ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;