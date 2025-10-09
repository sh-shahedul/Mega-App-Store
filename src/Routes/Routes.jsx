import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AppDetails from '../Pages/AppDetails/AppDetails';
import Apps from '../Pages/Apps/Apps';
import Installition from '../Pages/Installition/Installition';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';




export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            index:true,
            path:'/',
            Component:Home,
            // loader:()=>fetch('../appsData.json')
        },
        {
            path:'/apps',
            Component:Apps,
        },
        {
            path:'/install',
            Component:Installition,
        },
        {
            path:'/apps/:id',
            Component:AppDetails,
           errorElement:<NotFoundPage></NotFoundPage>
            
        },
       
    ]
  },
]);