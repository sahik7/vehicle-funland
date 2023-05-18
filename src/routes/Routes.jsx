import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../pages/Home/Home/Home';
import Main from '../components/Main';
import NotFound from '../pages/NotFound/NotFound';
import AllToys from '../pages/AllToys/AllToys';
import MyToys from '../pages/MyToys/MyToys';
import AddToys from '../pages/AddToys/AddToys';
import Blogs from '../pages/Blogs/Blogs';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFound/>,
        children:[
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>,
            },
            {
                path: "/myToys",
                element: <MyToys></MyToys>,
            },
            {
                path: "/addToy",
                element: <AddToys></AddToys>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },

        ]
    },
]);


export default router;