import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const {user} = useContext(AuthContex)
    const [booki,setbook] = useState([])
    console.log(booki)

    const url = `http://localhost:5000/book?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setbook(data))
    },[])
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
      </tr>
    </thead>

            {
                booki.map(bookin=> <BookingRow key={bookin._id} bookin={bookin}></BookingRow>)
            }
        </div>
    );
};

export default Bookings;