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
import Register from '../pages/Login/Register';
import ProtectedRoute from './ProtectedRoute';

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
                element: <ProtectedRoute><MyToys></MyToys></ProtectedRoute>,
            },
            {
                path: "/addToy",
                element: <ProtectedRoute><AddToys></AddToys></ProtectedRoute>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },

        ]
    },
]);


export default router;