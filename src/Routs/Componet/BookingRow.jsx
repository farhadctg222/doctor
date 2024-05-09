

const BookingRow = ({bookin,handleDelete, handleconfirm}) => {
    const {_id,name,date,img,email,price, status} = bookin;
   

    
   
    return (
        <div>
             <tr>
        <th>
          <button onClick={()=> handleDelete(_id)} className='btn btn-success'>delete</button>
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
        <td>
         {date}
          
        </td>
        <td>$: {price}</td>
        <th>
         { status === 'confirm' ? <span className="text-blue-500">Confim</span>
         :
         <button onClick={()=> handleconfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
        </th>
      </tr>
        </div>
    );
};

export default BookingRow;