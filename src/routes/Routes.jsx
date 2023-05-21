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
import SingleToyDetails from '../pages/SingleToyDetails/SingleToyDetails';
import UpdateData from '../pages/UpdateData/UpdateData';

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
                loader: () => fetch("http://localhost:5000/vehicleCount")
            },
            {
                path: "/myToys",
                element: <ProtectedRoute><MyToys></MyToys></ProtectedRoute>
            },
            {
                path: "/addToy",
                element: <ProtectedRoute><AddToys></AddToys></ProtectedRoute>,
            },
            {
                path: "/vehicles/:id",
                element: <ProtectedRoute><SingleToyDetails></SingleToyDetails></ProtectedRoute>,
                loader: ({params}) => fetch(`https://vehicle-funland-server-sahik7.vercel.app/vehicles/${params.id}`)
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
            {
                path: "/update",
                element: <UpdateData/>,
            },

        ]
    },
]);


export default router;