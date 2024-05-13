import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';
import axios from 'axios';

const Bookings = () => {
    const {user} = useContext(AuthContex)
    const [booki,setbook] = useState([])
    console.log(booki)
    
    const handleDelete = id=>{
      const proced = confirm('are you delete naw')
      if(proced){
        fetch(`https://doctor-hazel-rho.vercel.app/bookings/${id}`,{
          method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
         const remain  = booki.filter(booking=> booking._id !==id)
         setbook(remain)
        })

      }
    }
    const handleconfirm = id=>{
      fetch(`https://doctor-hazel-rho.vercel.app/bookings/${id}`,{
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({status:'confirm'})
      })
      .then(res=>res.json())
      .then(data=>{
       if(data.modifiedCount>0){
        const remain = booki.filter(booking => booking._id !== id)
        const updat = booki.find(booking=> booking._id ===id)
        updat.status = 'confirm'
        const newbooking = [updat,...remain]
        console.log(newbooking)
        setbook(newbooking)

       }
      })
    }

    const url = `https://doctor-hazel-rho.vercel.app/book?email=${user.email}`
     axios.get(url,{
      withCredentials:true
     })
     .then(res=>{
      setbook(res.data)
     },[url])
    return (
        <div>
            <h1>Your Booking : {booki.length}</h1>
            <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>y
    </thead>

            {
                booki.map(bookin=> <BookingRow 
                  key={bookin._id}
                   bookin={bookin}
                   handleDelete={handleDelete}
                   handleconfirm={handleconfirm}>
                   
                   </BookingRow>)
            }
        </div>
    );
};

export default Bookings;