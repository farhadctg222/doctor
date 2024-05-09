import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./Componet/Home";
import Login from "./Componet/Login";
import SignUp from "./Componet/SignUp";
import Book from "./Componet/Book";
import Bookings from "./Componet/Bookings";
import PrivetRout from "./Componet/PrivetRout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
           path: '/',
           element: <Home></Home> 
        },
        {
          path : '/login',
          element: <Login></Login>
        },
        {
          path : '/signup',
          element: <SignUp></SignUp>
        },
       
        {
          path: '/book/:id',
          element: <PrivetRout><Book></Book></PrivetRout>,
          loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path: '/booking',
          element: <PrivetRout><Bookings></Bookings>,</PrivetRout>,
          
        }
      ]
    },
  ]);


  export default router