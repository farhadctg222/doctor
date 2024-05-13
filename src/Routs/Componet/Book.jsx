import  { useContext } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';



const Book = () => {
   

    const {user} = useContext(AuthContex)
    console.lo
    const service = useLoaderData()
    const {title,price,_id,img}= service;
    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const  price = form.price.value;
        const date = form.date.value;
        const email = form.email.value;

        const order = {
            name,
            img,
            price,
            date,
            service: title,
            email,
            service_id: _id
        }
        console.log(order)

        fetch('https://doctor-hazel-rho.vercel.app/booking',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'

            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            Swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success"
            });
          }
        })
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" defaultValue={user?.email} name='email' className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input type="text" defaultValue={title} name='name' className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" defaultValue={price} name='price'  className="input input-bordered"  />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date"  name='date'  className="input input-bordered"  />
                
              </div>
              <div className="form-control mt-6">
               <input type="submit" className='btn btn-success' value="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Book;