import React from 'react';

const BookingRow = ({bookin}) => {
    const {name,date,img,email,price} = bookin;
   
    return (
        <div>
             <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {img &&<img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
             
            </div>
          </div>
        </td>
        <td>
         {email}
          
        </td>
        <td>$: {price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        </div>
    );
};

export default BookingRow;